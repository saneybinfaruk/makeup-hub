import axios from "axios";
import React from "react";

const HttpClient = () => {


  const get = async () => {
    try {
      const response = await axios.get("");
      return response.data;
    } catch (error) {}
  };
  
};


