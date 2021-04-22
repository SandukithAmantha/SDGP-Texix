package com.texix.springboot1;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Image {
    String image;

    public Image(@JsonProperty("img") String image) {
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Image{" +
                "image='" + image + '\'' +
                '}';
    }
}
