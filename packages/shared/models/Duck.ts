import mongoose, { Schema, Document } from "mongoose";

// Define the GeoJSON Point interface
interface Point {
  type: "Point";
  coordinates: [number, number];
}

// Define the interface for the Duck document
export interface IDuck extends Document {
  color: string;
  age: number;
  location: Point;
}

// Create the schema
const DuckSchema = new Schema<IDuck>(
  {
    color: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: (coordinates: number[]) => coordinates.length === 2,
          message: "Coordinates must be in [longitude, latitude] format",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create a geospatial index on the location field
DuckSchema.index({ location: "2dsphere" });

// Create and export the model
export const Duck = mongoose.model<IDuck>("Duck", DuckSchema);
