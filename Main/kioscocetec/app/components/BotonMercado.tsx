"use client";

import { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

initMercadoPago("TEST-569d4f12-f397-4acf-84b5-e9c82ca62b10");

const MercadoButtonComponent = ({ price }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const onReady = async () => {
    /*
    Callback called when the Brick is ready.
    Here you can hide loadings from your site, for example.
  */
    console.log("The Mercado Pago payment brick is ready!");

    // Hide any loading indicators
    const loadingIndicator = document.getElementById("loading-indicator");
    if (loadingIndicator) {
      loadingIndicator.style.display = "none"; // Hide the loading indicator
    }

    // Optionally, enable the payment button or perform other UI updates
    const paymentButton: any = document.getElementById("payment-button");
    if (paymentButton) {
      paymentButton.disabled = false; // Enable the payment button
    }
  };

  useEffect(() => {
    const createPreference = async () => {
      try {
        const response = await fetch(
          "https://api.mercadopago.com/checkout/preferences",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer TEST-8526274776296121-111115-f4e0f22adcf585be18d18cc10eec5233-830735154", // Use your Mercado Pago access token here
            },
            body: JSON.stringify({
              items: [
                {
                  id: "2c938084922e71cf01923f6224370455", // Replace with your item ID
                  title: "Tier 1", // Replace with your item title
                  description: "100 Tokens", // Optional: Replace with your item description
                  quantity: 1, // Replace with the item quantity
                  currency_id: "ARS", // Replace with the appropriate currency code
                  unit_price: price, // Replace with the unit price
                },
              ],
            }),
          }
        );

        const data = await response.json();
        console.log(data);
        setPreferenceId(data.id); // Save the preference ID to state
      } catch (error) {
        console.error("Error creating preference:", error);
      }
    };

    createPreference();
  }, [price]); // Empty dependency array ensures this runs once on mount

  return (
    <div className="App">
      {preferenceId ? (
        <Wallet
          initialization={{ preferenceId }}
          customization={{ texts: { valueProp: "smart_option" } }}
          onReady={onReady}
        />
      ) : (
        <p>Loading payment options...</p>
      )}
    </div>
  );
};

export default MercadoButtonComponent;
