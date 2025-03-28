import React from "react";

interface IProps {
  data: {
    productName: string;
    productOrigin: string;
    productDetails: string;
    productForecast: string;
    productColor: string;
    productCultivationType: string;
    productMoisture: string;
    productFormAndCut: string;
    [key: string]: string;
  };
}

const table = {
  productName: "Product Name",
  productOrigin: "Product Orifin ",
  productDetails: "Product Details",
  productForecast: "Product Forecast",
  productColor: "Product Color",
  productCultivationType: "Cultivation type",
  productMoisture: "Product moisture",
  productFormAndCut: "Form and Cut",
};

const ProductDetails = ({ data }: IProps) => {
  return (
    <div className="px-3">
      <h2 className="text-2xl font-bold mb-2">Product Details</h2>
      <div className="grid grid-cols-2 text-sm gap-y-3">
        {Object.entries(table).map(([key, value]) => (
          <React.Fragment key={key}>
            <span className="text-grayCustom">{value}</span>
            <span className="text-black text-left">{data[key]}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
