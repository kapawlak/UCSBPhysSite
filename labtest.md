# Lab 0: Learning to use iOLab
---
### All Materials Needed :
- Your phone with the phyphox App installed
- A magnet
- Ruler
- Steel screw
 

---
# The Phyphox App


:::Figure:RFigure
![The Phyphox Phone App in the iOS store](imgs/phyphox.png)
:::

In this intro lab, [google](google.com) we will learn how to use the phyphox app to take useful data. You can download the app from their [website](https://phyphox.org/). 

Phyphox allows you to use the sensors in your phone to measure quantities such as frequency, acceleration, magnetic fields, etc. Data can be exported in many common formats for later analysis.


 You are encouraged to play with phyphox,  explore its capabilities and experiment ideas on the website, and take creative license to your investigations throughout the course. The instructions provided in each lab can be seen as a "minimum" requirement -- the features of phyphox go far beyond these suggestions


 # Experiments
## 1. Overview
In this lab, we will get familiar with phyphox by investigating the external magnetic field of a magnet. Our first step will be to find the location of the magnetometer on your phone. It's crucial to know where the sensor is before making a measurement. Feel free to mark the true location for future labs.

After we find the exact location of the magnetometer, we will explore how phyphox allows us to take *calibrated* and *uncalibrated* data and which one to use in our experiments. Lastly, remember to subtract the background noise from the measurements before you move on to the data analysis.

Our first project will be exploring the field of permanent magnets, and getting comfortable with using the magnetometer to acquire data. You will use the magnetometer throughout this course.
## 2. Get to know the magnetometer

### Materials needed:

---
- Your phone
- A magnet
- Steel screw

---

The first thing you should do, is to make sure that you know exactly where in your phone the magnetometer is. It’s never in the center of the device, so you can’t make an accurate measurement just by moving a magnetic source toward or away from the face of your phone.  Usually the magnetometer is located somewhere at the edge of the phone, and its exact location depends on the brand and model.

**For  experiments, an appropriate location may be a room with minimal electronic devices, or on top of a wooden/nonmetallic table. Be sure to remove any magnets and metals from the experiment area to minimize external fields.**

::: Question
Why would metal interfere with the calculation of magnetic field?
:::


Instructions for labs in this course will be in "exercise" boxes such as this one, with numbered steps to help you navigate the procedure. The easiest way to successfully complete these labs is to tackle each step in order, taking observational notes on each numbered step so that you have a record of what you've done for your final write-up.

We will now describe the process you will  use to find the location of the magnetometer:
1. Find a steel screw (or some other things that can be magnetized) and a magnet, magnetize the screw by rubbing it with the permanent magnet
2. Put the magnet away from your experimental area
3. Move the tip across the surface of your phone until you get a strong reading as it reaches the magnetometer.


The magnetometer in your phone is extremely sensitive because it is designed to be used as a compass. It can easily resolve 50µT, but it also saturates at few mT.  If you are using a neodymium magnet, it might easily saturate the sensor due to its strong fields. Make sure that the magnet is either weak enough or far enough from the sensor so that the field strength stays below 2mT. Just check that if the magnet gets closer the readings can still increase.
 Now that we have found the location of the magnetometer, the next step would be to know its features. On phyphox, you can see the magnetometer has a *calibrated* and *uncalibrated* mode. Think about what mode should be used for the purpose of measuring the magnetic field strength of a magnet.

::: Question
Define calibration in the context of a physics experiment. List a few reasons why calibration of all measuring devices is critical to *any* physics experiment.
:::


Since the magnetometer is very sensitive, any kind of unwanted magnetization will affect your measurements. Unfortunately, you phone is full of things that create magnetic fields and that can be easily magnetized. This is the reason why the magnetometer is usually at the edge - to stay far away from those things. 


If your phone is exposed to a strong magnetic field, something might get magnetized and the compass would point in the wrong direction. As a result, every phone has some strategy to calibrate the magnetometer under these circumstances. You might trigger this when measuring the strength of a magnetic field. For your phone to make sure the compass is working, it will automatically subtract the component from the external field to get calibrated data. This could be a problem if you try to measure a higher magnetic field on purpose.

:::Exercise named
broken
:::

:::Exercise named2
broken
:::