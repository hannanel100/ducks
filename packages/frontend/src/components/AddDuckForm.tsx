import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDuck } from "../redux/duckActions";
import { Duck } from "../redux/duckActions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const AddDuckForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    color: "",
    age: "",
    latitude: "",
    longitude: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDuck: Duck = {
      id: Date.now().toString(), // temporary ID, usually backend would generate this
      color: formData.color,
      age: parseInt(formData.age),
      location: {
        type: "Point",
        coordinates: [
          parseFloat(formData.longitude),
          parseFloat(formData.latitude),
        ],
      },
    };

    dispatch(addDuck(newDuck));
    setFormData({ color: "", age: "", latitude: "", longitude: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-duck-form">
      <div>
        <Label htmlFor="color">Color:</Label>
        <Input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="age">Age:</Label>
        <Input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="latitude">Latitude:</Label>
        <Input
          type="number"
          id="latitude"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          step="any"
          required
        />
      </div>
      <div>
        <Label htmlFor="longitude">Longitude:</Label>
        <Input
          type="number"
          id="longitude"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          step="any"
          required
        />
      </div>
      <button type="submit">Add Duck</button>
    </form>
  );
};
