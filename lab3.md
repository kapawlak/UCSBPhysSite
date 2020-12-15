# Lab 3: Position, Velocity, Acceleration, and Falling Objects

---

***@fa-thumb-tack@ Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.***

***@fa-thumbs-up@ All responses and answers should contain the correct number of sig figs and should include units when needed.***

---

### Getting Familiar 

The Simulation 1 below demonstrates the free fall motion of a ball. The left hand side shows what the 
  scene looks like to an onlooker: a ball falling straight towards the ground at increasing speed. The right 
  hand side shows you what the respective "position v.s. time" curve would look like if you were to record this data.
  To get a feel for the concepts in this lab, feel free to play with the sliders. Observe how increasing and decreasing
  air resistance affects the shape of the graph! In this lab you will explore this phenomenon using your analytical and mathematical skills.
	
:::Figure:Simulation
<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/FreeFall/freefall_multi.html" width= "100%" height="800" style="border:none;"> </iframe>
:::

# Introduction: Free fall in 1D

For 1D motion of a body, we are typically concerned with three variables which characterize the trajectory:

1. The *position*, $x(t)$, which tells you where in space the body is located at a given time
2. The  *velocity*, $v(t)$ which tells you the speed and direction the object is traveling at a given time, and hence the *change* in the position
3. The acceleration, $a(t)$, which accounts for the forces on the body through $F=ma$, and tells you the *change* in the velocity.
   
These three variables are interrelated, as each quantity tells you about the *change over time* of the previous.


## 1. Motion with No Forces

:::Figure:RFigure
![](imgs/nov_pos.gif)
:::
To make our discussion concrete, we should review some basic physics in the case that there are no forces acting on the body of interest. 


Let's imagine that that at $t=0$, we have a ball at rest at a height $y_0= 25 m$. What is its position at $t=10$s? Since the ball is stationary --- otherwise, $v_0= 0$ m/s --- of course it will still be $y(10 s)=25 m$!



Now we imagine that this ball is given an initial velocity $v_0 = + 10$ m/s by tossing it upwards, with no forces acting upon it (for example, in space).  Since no forces are acting on the ball, the *change* in the velocity must be zero, so $v(t) = v_0=10$m/s for all time.  Note that the time, $t$, does not appear in this equation!


::::::Figure:Figure
:::col l5 m5 s12
![](imgs/v10_pos.gif)
:::
:::col l7 m7 s12
![](imgs/v10_vel.png)
:::
####
::::::

Since the velocity tells you how an object's *position* is changing in time, and we know that the velocity in the absence of force is constant, we can say that the position of the ball will increase by $10$ meters per second that passes. From this, we deduce that at $t=10$s, the ball is now at $y(10 s) = y_0 + v_0 t=  25$m $+ 10$ m/s $\times 10$s = $125$ m. 

Generally, in the absence of external forces, we can capture this relationship mathematically as:

$$
y(t) = v_0 t + y_0
$$
In plain English, the above mathematical sentence translates to: "The position of the ball at a given time is equal to the distance it travels per each unit of time (e.g. seconds), multiplied by the time that has passed, plus its original position."

## 2. Motion Under Constant Acceleration
Once we include external forces acting on a body, we now must think about how the velocity changes over time.

Consider now that we repeat this experiment on the moon, so that our ball is accelerating toward the ground at approximately $a = -1.6$m/s$^2$

Similar to our equation for change in position, our equation for velocity is now:

$$
v(t) = a t + v_0 
$$

::::::Figure:Figure

:::col l6 m6 s12
![](imgs/acc_pos.gif)
:::


:::col l6 m6 s12
![](imgs/acc_vel.png)
:::

::::::

So that at $t=10$, we can now calculate that our ball has a velocity of $v(10s) = -6$ m/s.

This presents us with an issue when calculating the new position of our ball, however, since now the velocity is continually changing: our previous equation is no longer correct.

Given the relationship between velocity and acceleration above, it is an exercise in calculus to show the following relationship is true:

$$
y(t) = \frac{1}{2} at^2 + v_0 t 
+y_0
$$


 Putting it all together, we have that $x(10 s) = 45$ m

## 3. Motion of falling objects

In the last example, we considered the motion of an object under constant acceleration due to gravity. In this lab, we will test the validity of this model under earth's gravity. 

When dropped from the same height, which one of these objects &ndash; stone or feather &ndash; will hit the ground first? Most people will say, &ldquo;That depends.&rdquo; If this is done in a normal room , the stone wins, as your intuition may tell you. However,  if it is done in a *vacuum*, which contains no air, both hit the bottom at the same time! The question we would like to answer is: "How does the presence of the air change the equations of motion for falling objects"?

In the next activity, you will watch videos of someone dropping a variety of balls from a sixth-floor walkway. For one drop, you will measure and record height and time data, and for the rest, you will be given the data. You will plot these data, and use your results to test the validity of one of the motion formulas, namely,

:::Figure:Equation
$$
y(t) = y_0 + v_{0}t + \frac{1}{2} at^2
$$
:::

where y is the position, $v_{0y}$ the initial velocity, $a_{y}$ the acceleration, and t the time. In some of these examples, you may find that the data does not match the theoretical equation. It is your job to determine how and why these equations change using your sharp analytical skills.


### General Properties of Motion Curves

::::::Figure:RFigure

![The relationship between x and t is constant](imgs/Constant.png)

![The relationship between x and t is linear](imgs/Linear.png)

![The relationship between x and t is quadratic](imgs/Quad.png)

::::::


Before you start the lab, we have one last theoretical discussion: given a plot of position versus time, how can we make quantitative and qualitative statements about the physics of a falling object? 

To answer this, we have two important statements to make from the discussion above:

1. The velocity of an object at a certain time is the slope of the distance-time graph at that point.
2. Similarly, the acceleration of an object at a certain point is the slope of the velocity-time graph at that point.





Before discussing this, there are three plot shapes that are important to understand for this analysis: constant, linear, and curved. 

Constant refers to a value that is not changing in time, a horizontal line, as can be seen in Figure 4 Part A. Linear refers to value that is changing with time but has a linear slope as seen in Figure 4 Part B. Curved refers to a value that is changing with time and is not linear as seen in Figure 4 Part C.

The following figure from Hyperphysics shows the trajectory of a body whose acceleration is constant for each segment of time. Acceleration being constant for each segment is important for simplifying our plots.


:::row
####
:::

Part A shows the three plots unobstructed. Please notice how the velocity corresponds to each section of the position plot. Whenever the position plot is linear, the velocity is constant. Whenever the position plot is curved, the velocity is linear. If the position is curving upwards, the velocity is positive, if the position is curving downwards, the velocity is negative. The Acceleration plot corresponds to the velocity plot exactly the same way the velocity plot corresponds to the position plot.

::::::Figure:Figure

:::col l6 m6 s12
![Part A: Unobstructed view](imgs/HP_MotionGraphs_Download.png)
Part A
:::
:::col l6 m6 s12
![](imgs/HP_MotionGraphs_Annotated.png)
Part B
:::

::::::


Part B indicates points on the plots which correspond to the description of Part A. Please study the plots and notes in Part B to understand how they relate.

:::::: Exercise
Now that you have gained familiarity with position, velocity, and acceleration plots we can do analysis. In this exercise you will take a new position plot and create sketches of the velocity and acceleration plots. Please see Figure 6 below.

:::Figure:Figure
![](imgs/PvTSketch.png)
:::

The dashed lines indicate where the plot changes from one of our above mentioned plot shapes to another. 

1. Make a sketch plot for velocity with dotted lines in the same positions. **A sketch is just a quick drawing to display the important features of a plot, e.g. linear, parabolic, or constant. You should label the axes, but you don't need a title.**

2. Sketch the velocity curve for each segment in you skeleton plot.

3. Do the same to make an acceleration plot. Please note you will now have to refer to the velocity plot instead of the position one.

4. Describe the motion in words. What is happening to the object in each segment of time. 

:::Note
Make sure to take a picture of your sketch plots and include them in your report along with the description.
:::

::::::

---
# colecting the Data


:::::: Exercise

In this section we will look at different balls dropped from the sixth floor walkway of Broida Hall. The four balls dropped in Video 1 are of varying sizes and weights. Figure 7 shows the balls which are dropped. 

:::Figure:Figure
![](imgs/Balls2.png)
:::

The pink dog ball is small but fairly weighty for its size. The basket ball is medium sized and also has decent weight to it. The volley ball is smaller than the basket ball and slightly lighter as well. The beach ball is by far the largest and the lightest. These four balls should give a wide range of masses and sizes for our data set. All four balls are dropped, however, you will only be taking data for the basket ball. The data on the other balls have been taken for you. We have annotated Video 1 for you with the height measurements and an embedded stopwatch. These will be useful tools for your data colection.

:::Video


<iframe src="https://www.youtube.com/embed/juYSrbM66b0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


:::


1. Watch Video 1 and see how each ball falls to the ground.

2. Take 10 data points by pausing the video and recording the distance from the top and the timestamp on the embedded stopwatch. 

3. Place your recoded data point in a table with the headers "Time (s)" and "Y_Basket (m)."

::::::

You have now colected some data for a basketball falling from the sixth floor of Broida! As mentioned above, three other balls were dropped from the same point at Broida. Rather than have you repeat the same data colection we have colected data for you using a software called Tracker.

Tracker allows us to monitor the location of the ball at every frame of the video which happens once every 1/30 seconds. This method has two advantages. 

1. We are able to more precisely identify the location of the ball.
2. We are able to colect many more data points.

Below is a short video demonstrating how the Tracker software was used to colect data for the four drops.

:::Video
<iframe src="https://www.youtube.com/embed/hvwjn3tAtqc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

The data you will need is in Table 1 below, linked in a google sheet.

:::Figure:Table

| Ball Drop Data Set | 
| -------- | 
| [Link to Google Sheet](https://docs.google.com/spreadsheets/d/1XI2mEKyuVftiG0uhUlS6Iah3zZuiGx1tUE5g1-e0ZIw/edit?usp=sharing)    | 

:::

---
# Analyzing the Data

:::::: Exercise
1. Start by copying the data linked in Table 1 into separate spreadsheet. 
2. Now you will insert your data you took for the basketball into the table and plot all four ball drops on one plot. For instructions on how to do this, watch the following video. 

:::Video
<iframe  src="https://www.youtube.com/embed/PT6GM85ut4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::
::::::
####
::::::Exercise
In this exercise you will start the analysis of the drops. 

1. Start by just looking at your data. **Analyze it qualitatively by using the tools you learned in Part 1 of the lab.** Try to determine what parts of each drop are falling under constant acceleration or constant velocity.
2. Notice how the Dog Ball, Basket Ball, and Volleyball all look very similar. The beach ball is quite different from the other three. Pick one of the three similar data sets and the beach ball and **sketch** a velocity vs time plot for both data sets on the same graph. **A sketch is just a quick drawing to display the important features of a plot, e.g. linear, parabolic, or constant. You should label the axes and the two lines, but you don't need a title. You shouldn't spend more than 5 minutes drawing this.**
3. Using the velocity lines, translate the plot into a brief description  (one or two sentences) of the drop.
4. Take a picture of your sketch and include it in your lab report. Also include your description.

::::::
####
:::::: Exercise
:::Note
This exercise is designed to help you understand curve fitting. Nothing needs to be submitted for this exercise.
:::

In the next exercise, for each of the datasets, you will perform a polynomial fit of degree 2. This will draw a line of best fit by using a quadratic function. That is that it will attempt to fit the equation:

:::Figure:Equation
$$
y = ax^2+bx+c
$$
:::

The computer will adjust $a$, $b$, and $c$ to best fit the data provided. Let's start by understanding what $a$, $b$, and $c$.

Equation 4 looks a lot like our kinematic equation for motion. Let's equate Equation 4 to the kinematic equation. We do this in Table 2 below. Each row starts by defining the variable. The next column has the symbol we use to represent the variable in the fit. The final column has the equivalent symbol used in the kinematic equation.

:::Figure:Table
| Variable Name | Fit Symbol | Kinematic Symbol |
| -------- | -------- | -------- |
| Time     | $x$     | $t$     |
| Position | $y$    | $y$    |
| Acceleration| $a$ | $\frac{1}{2}g$ |
| Initial Velocity | b |  $v_0$ |
| Initial Position | c | $y_0$
:::


:::Note
** This is a critical concept that you understand before moving forward. Below are three questions. Read them and spend a few minutes trying to answer them for yourself. When you think you have the answers, click the link at the bottom to take you to the answers. **


1. For an ideal fall (one that falls exactly like the kinematic equation describes), what should the value of $a$ in your fit be?

2.  For drop like the ones in the video, where the ball is released from rest, what should the value of $b$ in your fit be?

3. When the origin is defined at the release point of the ball, like it is in the video, what should the value of $c$ in your fit be?

[Answers](https://docs.google.com/document/d/1xuPutEV_pWWWZYYmi8oLKV-G9F3q-pMSDv9B48brLp0)

:::
::::::

::::::Exercise
In this exercise we will be more quantitative about our analysis. We will perform fits and use those to aid our analysis. 

1. For each of the drops perform a polynomial fit of degree 2. 
2. Create a table to summarize the information from your fits. **Hint:** $a=\frac{1}{2}g$, so make sure to solve this for $g$ before putting it in your table. Your table should look like the following:

:::Figure:Table


| Parameters| Ideal Drop | Dog Ball | Basketball | Volleyball | Beach Ball|
| -------- | -------- | -------- | -- | -- | -- |
| Gravitational Accel. [g] ($m/s^2$)     |      |      |   |   | |
| Initial Velocity  ($m/s$)   |      |      |   |   | |
| Initial Position    ($m$) |      |      |   |   | |

:::

3. Calculate the percent discrepancy of the acceleration from ideal for each of the four drops. You can do this in a spreadhseet if you'd like but please show your work for **one** of the calculations. 

:::Question 
1. What is the cause of this systematic error in the measurement of $g$?

2. Based on the picture of the balls, and what you know about the balls generally, why do you think the systematic error is different for the different balls? 
:::

4. Now let's look more closely at the initial velocity and intital position for the different drops. Do you notice how as the drops getting further from ideal the initial velocity and the inital position get further from ideal as well?

:::Question
1. What is the percent difference in initial velocity of the beach ball and the basketball?

2. What is the percent difference in initial position of the beach ball and the basketball?
:::

The lower percent error in the value of $g$ from the basketball indicates that it has less systematic error, or that it is a better representation of our model (objects falling under constant acceleration). The large percent difference the beach ball has in the initial velocity and initial position with the basketball, combined with the larger percent discrepancy in the value of $g$ for the beach ball, hints that the beach ball strongly doesn't follow the constant acceleration model.

::: Question
If the beach ball isn't falling under constant acceleration, what model might it be falling under?
:::

5. Create one more plot of only the beach ball falling, but only use one second of data near the end. Somewhere it looks most linear. 
6. Perform a linear fit on this data.

::: Question
1. What is the slope of the line?

2. What does the slope represent?
:::


::::::

# Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::



::::::row w3-center w3-card-2 w3-flat-clouds
### **In this lab, there were:**
:::col l6 m6 s12
 @fa-question-circle qtotal w3-hover-shadow@ 
:::
:::col l6 m6 s12
 @fa-pencil-square-o etotal w3-hover-shadow@
:::
### **@fa-hand-o-right@ Please be sure to complete all questions and exercises @fa-hand-o-left@**
::::::







