import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/232c/cf4e/580c0850b6f9fa805d7ea4740c1f7ed3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zju5IZAQPZEhZr5emzx-ZsdK-etW26VaKQIamOjO5QUQY2JdgtVvshQprUUbtwtWnBDbxiImr8rOP7GJyqIvxseP-weHgA8o48LL8Md8FgkTxp1txSlIv5DwfkUYIqIj7-mpP1PE60ENQisrKDP78eXs11TpPZvfPpm-16U2s31CQAQxFvBrN~EnBcvoVYQ3H78U-AbPa4ZH6oBhWX2p1d-DmwdT8oQLWnjkA0IqEEPk2wUcklWx9rT0TS~VRu3AvUtTxwLTrRZzs3T4ejaBjaCFq71xvI2IXnYQ37YCc~4T2W7CI5Dv7UpFIc7Sd6cvkBgpU9ZTKPMQEJU-eTfsRA__)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Trouver-vous le professeur parfait
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
