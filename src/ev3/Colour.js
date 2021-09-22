import React,{Component} from "react";

import lineComplete from './images/ev3-line-complete.png';
import visualStudioEv3 from './images/screenshot-visual-studio-ev3.png';
import colourBrick from './images/ev3-color-brick.jpg';
import visualStudioConnect from './images/screenshot-visual-studio-connect.png';
import colourFollowLine from './images/ev3-color-follow-line.png';
import colourShape from './images/ev3-color-shape.png';

class Colour extends Component {
  render() {
    return (
      <div className="Colour">

        <h2 className="w3-text-red w3-center">EV3 Colour Detection Project</h2>

        <img src={lineComplete} alt="" className="w3-image" />

        <hr className="ca-hr" />

        <h3>Step 1: Setup</h3>

        <p>In groups, choose one laptop to be used for coding and a second laptop for research. Close all other laptops.</p>

        <p>Download and install <a href="http://code.visualstudio.com/">Visual Studio Code</a> and the LEGO MINDSTORMS EV3 MicroPython extension.</p>

        <img src={visualStudioEv3} alt="" className="w3-image" />

        <p>Connect to the local wifi:</p>

        <ul>
            <li>SSID: ROBOTS</li>  
            <li>Password: 99999999</li>
        </ul>

        <hr className="ca-hr" />

        <h3>Step 2: Buld the Car</h3> 

        <img src={colourBrick} alt="" className="w3-image" />

        <p>The instructions are available here:</p>

        <p><a href="/instructions/building-instructions-line.html">Colour Detection Instructions</a></p>

        <p>Connect the sensors and motors using the three cables:</p>

        <ul>
          <li>The proximity sensor is plugged into S1</li>  
          <li>The motors are plugged into MA and MB</li>
        </ul>

        <hr className="ca-hr" />

        <h3>Step 3: Code the Parking Gate</h3>  

        <p>Start a new project. Open up main.py and use this code as a starting point:</p>

        <pre><code class="hljs coffeescript"><span class="hljs-comment">#!/usr/bin/env pybricks-micropython</span>
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks <span class="hljs-keyword">import</span> ev3brick <span class="hljs-keyword">as</span> brick
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.ev3devices <span class="hljs-keyword">import</span> (Motor, TouchSensor, ColorSensor, InfraredSensor, UltrasonicSensor, GyroSensor)
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.parameters <span class="hljs-keyword">import</span> (Port, Stop, Direction, Button, Color, SoundFile, ImageFile, Align)
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.tools <span class="hljs-keyword">import</span> <span class="hljs-built_in">print</span>, wait, StopWatch
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.robotics <span class="hljs-keyword">import</span> DriveBase
        {"\n"}
        {"\n"}
        <span class="hljs-keyword">import</span> time
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Start the program with a beep</span>
        {"\n"}
        brick.sound.beep()
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Define which motors and sensors are connected</span>
        {"\n"}
        motorLeft = Motor(Port.A)
        {"\n"}
        motorRight = Motor(Port.B)
        {"\n"}
        colorSensor = ColorSensor(Port.S1)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Fetch current color</span>
        {"\n"}
        <span class="hljs-built_in">print</span>(<span class="hljs-string">"Current Color: "</span>+str(colorSensor.color()))
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Turn left</span>
        {"\n"}
        motorLeft.run(<span class="hljs-number">100</span>)
        {"\n"}
        motorRight.run(<span class="hljs-number">0</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait three seconds</span>
        {"\n"}
        time.sleep(<span class="hljs-number">3</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Turn right</span>
        {"\n"}
        motorLeft.run(<span class="hljs-number">0</span>)
        {"\n"}
        motorRight.run(<span class="hljs-number">100</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait three seconds</span>
        {"\n"}
        time.sleep(<span class="hljs-number">3</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Move forward</span>
        {"\n"}
        motorLeft.run(<span class="hljs-number">100</span>)
        {"\n"}
        motorRight.run(<span class="hljs-number">100</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait three seconds</span>
        {"\n"}
        time.sleep(<span class="hljs-number">3</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Move backwards</span>
        {"\n"}
        motorLeft.run(<span class="hljs-number">-100</span>)
        {"\n"}
        motorRight.run(<span class="hljs-number">-100</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait three seconds</span>
        {"\n"}
        time.sleep(<span class="hljs-number">3</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Stop</span>
        {"\n"}
        motorLeft.run(<span class="hljs-number">100</span>)
        {"\n"}
        motorRight.run(<span class="hljs-number">100</span>)</code></pre>
        
        <p>Read the starting code line by line and all the comments. As a group strive to understand every line of code.</p>

        <p>Your bin will have two names, the LEGO Brick will use the name on the red tape. Use Visual Studio Code to the LEGO Brick:</p>

        <img src={visualStudioConnect} alt="" className="w3-image" />

        <p>Push F5 on a PC or FN+F5 on a Mac to test your code.</p>

        <p>The colour sensor will provide a number representing which color it is currenlty sensing:</p>

        <ol>
          <li>Color.BLACK</li>
          <li>Color.BLUE</li>
          <li>Color.GREEN</li>
          <li>Color.YELLOW</li>
          <li>Color.RED</li>
          <li>Color.WHITE</li>
          <li>Color.BROWN</li>
        </ol>

        <h4>Follow a Line</h4>

        <p>Using the provided electrical tape, create a line on your desk resembling something like this:</p>

        <img src={colourFollowLine} alt="" className="w3-image" />

        <p>Code your LEGO car to follow the line.</p>

        <h4>Stay in a Box</h4>

        <p>Using the provided electrical tape, create a shape on your desk resembling something like this:</p>

        <img src={colourShape} alt="" className="w3-image" />

        <p>Code your LEGO car stay within your shape.</p>

        <hr className="ca-hr" />

        <h3>Step 4: Submitting</h3>

        <p>Submit both of your your <code>main.py</code> files and a list of group members that were present in Blackboard.</p>

        <hr className="ca-hr" />

        <script>hljs.initHighlightingOnLoad();</script>

      </div>
    );
  }
}

export default Colour;