import "./sketch.css";
import { useEffect } from "react";
import OpenSimplexNoise from "./OpenSimplexNoise";
import p5 from "p5";

const BlobBG = () => {
  let w = 0;
  let h = 0;
  let noise;

  let NO_BLOBS = 12;
  let blobs = new Array(NO_BLOBS);

  const totalFrames = 720;
  let counter = 0;

  const p = (p5) => {
    p5.setup = (canvasParentRef) => {
      counter = p5.radians(1);
      noise = new OpenSimplexNoise(1000);
      w = p5.windowWidth;
      h = p5.windowHeight;

      p5.createCanvas(w, h).parent(canvasParentRef);
      console.log(w, h);

      for (let i = 0; i < NO_BLOBS; i++) {
        blobs.push(new blobby(p5));
      }
    };

    p5.draw = () => {
      p5.background(255);
      p5.drawingContext.filter = "blur(200px) opacity(5%)";
      let percent = (counter % totalFrames) / totalFrames;
      render(percent, p5);
      // console.log(frameRate());

      counter++;
    };

    const render = (percent) => {
      let a = percent * p5.TWO_PI;
      blobs.forEach((blob) => blob.render(a, p5));
    };

    class sNoiseLoop {
      constructor(radius, min, max) {
        this.radius = radius;
        this.min = min;
        this.max = max;
        this.offsetX = p5.random(0, w * 2);
        this.offsetY = p5.random(0, h * 2);
      }

      val(step) {
        let noiseOut = noise.noise2D(this.offsetX + this.radius * p5.cos(step), this.offsetY + this.radius * p5.sin(step));
        return p5.map(noiseOut, -1, 1, this.min - this.max / 7, this.max + this.max / 7);
      }
    }

    class blobby {
      colorMap = ["#AF72FF", "#FF37BB", "#FF9900"];
      noiseMax = 1;
      constructor() {
        this.x = new sNoiseLoop(0.2, 0, w, p5);
        this.y = new sNoiseLoop(0.2, 0, h, p5);
        this.r = new sNoiseLoop(1.5, 150, 200, p5);
        this.xOffset = new sNoiseLoop(1.5, -50, 50, p5);
        this.yOffset = new sNoiseLoop(1.5, -10, 10, p5);
        this.color = this.colorMap[Math.floor(Math.random() * this.colorMap.length)];
        this.phase = p5.random(p5.radians(5));
      }

      render(step) {
        p5.push();
        p5.translate(this.x.val(step), this.y.val(step));
        p5.noStroke();
        p5.fill(this.color);
        p5.beginShape();

        for (let a = 0; a < p5.TWO_PI; a += p5.radians(5)) {
          let xoff = this.r.val(step) * p5.cos(a + this.phase) + this.xOffset.val(a);
          let yoff = this.r.val(step) * p5.sin(a + this.phase) + this.yOffset.val(a);
          p5.vertex(xoff, yoff);
        }

        p5.endShape(p5.CLOSE);
        p5.pop();
        this.phase += 0.003;
      }
    }
  };
  useEffect(() => {
    new p5(p);
  }, []);
  return;
};

export default BlobBG;
