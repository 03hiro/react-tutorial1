import { useState, useEffect } from "react";

import { fetchImages } from "../api/api";
import { Gallery } from "./Gallery";
import { Form } from "./From";
 
export const Main =() => {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
      fetchImages("shiba").then((urls) => {
        setUrls(urls);
      });
    }, [])
  
    function reloadImages(breed) {
      fetchImages(breed).then((urls) => {
        setUrls(urls);
      });
    }
  
    return (
      <main>
        <section className="section">
          <div className="container">
            <Form onFormSubmit={reloadImages}/>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  