import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPanel.css";
import {
  FaUpload,
  FaFileExcel,
  FaPaste,
  FaCamera,
  FaFileImage,
  FaFile,
} from "react-icons/fa";
import { MdError, MdCheckCircle } from "react-icons/md";

const countries = [
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "us", name: "USA", flag: "🇺🇸" },
  { code: "uk", name: "UK", flag: "🇬🇧" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "fr", name: "France", flag: "🇫🇷" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "cn", name: "China", flag: "🇨🇳" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "br", name: "Brazil", flag: "🇧🇷" },
];

const UploadPanel = () => {
  const [showResult, setShowResult] = useState(false);
  const [selectedUploadType, setSelectedUploadType] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("in");

  const navigate = useNavigate();

  const handleUpload = () => {
    if (selectedUploadType) {
      setShowResult(true);
      setIsUploaded(true);
    }
  };

  const handleSelectUploadType = (type) => {
    setSelectedUploadType(type);
    setIsUploaded(false);
    setShowResult(false);
  };

  return (
    <div className="upload-container">
      <div className="upload-card">

        {/* Country Dropdown */}
        <div className="top-row">
          <label className="label">Select Country</label>
          <select
            className="dropdown"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>

          {/* Navigation Buttons */}
          {isUploaded && (
            <div className="action-buttons">
              <button className="small-btn" onClick={() => navigate("/followup")}>
                Follow Up Calls
              </button>
              <button className="small-btn" onClick={() => navigate("/chathistory")}>
                Chat History
              </button>
            </div>
          )}
        </div>

        {/* Upload Type Selection */}
        <label className="label">Upload Number List</label>
        <div className="button-row">
          <button className={`upload-btn ${selectedUploadType === "paste" ? "selected" : ""}`} onClick={() => handleSelectUploadType("paste")}><FaPaste /></button>
          <button className={`upload-btn ${selectedUploadType === "excel" ? "selected" : ""}`} onClick={() => handleSelectUploadType("excel")}><FaFileExcel /></button>
          <button className={`upload-btn ${selectedUploadType === "camera" ? "selected" : ""}`} onClick={() => handleSelectUploadType("camera")}><FaCamera /></button>
          <button className={`upload-btn ${selectedUploadType === "file" ? "selected" : ""}`} onClick={() => handleSelectUploadType("file")}><FaFile /></button>
          <button className={`upload-btn ${selectedUploadType === "image" ? "selected" : ""}`} onClick={() => handleSelectUploadType("image")}><FaFileImage /></button>
          <button className={`upload-btn blue ${selectedUploadType ? "" : "disabled"}`} onClick={handleUpload} disabled={!selectedUploadType}><FaUpload /></button>
        </div>

        {/* Upload Result Section */}
        {showResult && (
          <div className="results">
            <p><strong>500</strong> Total Numbers</p>
            <ul>
              <li className="clickable" >
                <MdError className="icon-red" /> 100 Total No List Remove Wrong Numbers 
              </li>
              <li className="clickable" >
                <MdError className="icon-orange" /> 75 Total No List Remove Same Numbers 
              </li>
              <li className="clickable" onClick={() => navigate("/autoreply")} >
                <MdError className="icon-pink" /> 50 Total Lazy Crazy Numbers 
              </li>
              <li className="clickable" onClick={() => navigate("/textmessage")}>
                <MdCheckCircle className="icon-white" /> 100 Total No List Text Numbers 
              </li>
              <li className="clickable" onClick={() => navigate("/WhatsAppMessage")}>
                <MdCheckCircle className="icon-green" /> 100 Total Active WhatsApp Numbers 
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPanel;
