package com.texix.springboot1;

public class LetterName {
    String image;

    public LetterName(String image) {
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
        return "LetterName{" +
                "image='" + image + '\'' +
                '}';
    }
}
