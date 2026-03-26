"use client";

import { useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import { useRef } from "react";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";

export default function FaceRecognitionDemo() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const openFilePicker1 = () => {
    fileInputRef1.current.click();
  };
  const openFilePicker2 = () => {
    fileInputRef2.current.click();
  };

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    const MODEL_URL = "/models";

    await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  };

  const handleUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const compareFaces = async () => {
    if (!image1 || !image2) return;

    setLoading(true);
    setResult("");

    try {
      const img1 = await faceapi.fetchImage(image1);
      const img2 = await faceapi.fetchImage(image2);

      const detection1 = await faceapi
        .detectSingleFace(img1)
        .withFaceLandmarks()
        .withFaceDescriptor();

      const detection2 = await faceapi
        .detectSingleFace(img2)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detection1 || !detection2) {
        setResult("No face detected");
        setLoading(false);
        return;
      }

      const distance = faceapi.euclideanDistance(
        detection1.descriptor,
        detection2.descriptor,
      );

      if (distance < 0.6) {
        setResult(`Face Detected: ${name}`);
      } else {
        setResult("Faces do not match");
      }
    } catch (error) {
      console.error(error);
      setResult("Error processing images");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 my-5 ">
      {/* <div className="max-w-4xl mx-auto px-6"> */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#343742]">
          See Our Facial Recognition in Action
        </h2>
      </div>
      <div className="border p-5">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Upload Images */}
          <div className="md:col-span-2 border border-b-gray-200 rounded-lg p-4 relative">
            <h3 className="text-center font-semibold mb-4 text-gray-600 absolute top-[-12px] left-50 bg-white px-2">
              Upload Your Photos
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="border rounded-lg p-4 text-center">
                {image1 ? (
                  <img
                    src={image1}
                    className="rounded-lg mb-2 w-full h-50 object-cover"
                  />
                ) : (
                  <div className="h-50 bg-gray-100 rounded mb-2">
                    <Image
                      src={avatar}
                      alt=""
                      className="object-cover h-50 w-full rounded-lg"
                    />
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef1}
                  onChange={(e) => handleUpload(e, setImage1)}
                  className="hidden"
                />

                <button
                  onClick={openFilePicker1}
                  className="bg-[#3c83d3] hover:bg-[#243a55] text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                  Upload Image
                </button>
              </div>

              <div className="border rounded-lg p-4 text-center">
                {image2 ? (
                  <img
                    src={image2}
                    className="rounded-lg mb-2 w-full h-50 object-cover"
                  />
                ) : (
                  <div className="h-50 bg-gray-100 rounded mb-2">
                    <Image
                      src={avatar}
                      alt=""
                      className="object-cover h-50 w-full rounded-lg"
                    />
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef2}
                  onChange={(e) => handleUpload(e, setImage2)}
                  className="hidden"
                />

                <button
                  onClick={openFilePicker2}
                  className="bg-[#3c83d3] hover:bg-[#243a55] text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          {/* Recognition Panel */}
          <div className="border rounded-lg p-4 relative">
            <h3 className="font-semibold mb-3 text-gray-600 absolute top-[-12px] px-2 bg-white">
              Enter Name
            </h3>

            <input
              type="text"
              placeholder="Test Recognition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-[20px] w-full border border-gray-200 rounded-lg p-2 mb-4 text-gray-600 mt-3"
            />

            <button
              onClick={compareFaces}
              disabled={loading}
              className={`w-full font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#3c83d3] hover:bg-[#243a55] text-white"
    }
  `}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </>
              ) : (
                "Test Recognition"
              )}
            </button>
            <p className="mt-7 text-gray-600">
              Upload two photos of yourself to see how wowidenti's facial
              recognition technology identifies you
            </p>
          </div>
        </div>
        <p className="text-md text-gray-500 mt-4 text-center py-2">
          Upload two photos of yourself to see how wowidenti’s facial
          recognition identifies you.
        </p>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 text-center text-green-600 font-semibold">
          {result}
        </div>
      )}
    </div>
  );
}
