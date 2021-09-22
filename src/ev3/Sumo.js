import React,{Component} from "react";

import visualStudioEv3 from './images/screenshot-visual-studio-ev3.png';
import gateComplete from './images/ev3-gate-complete.png';
import ev3Sumo from './images/ev3-sumo.jpg';
import sumoRing from './images/ev3-sumo-ring.png';
import visualStudioConnect from './images/screenshot-visual-studio-connect.png';

class Sumo extends Component {
  render() {
    return (
      <div className="Sumo">

        <h2 className="w3-text-red w3-center">EV3 Sumo Robot Project</h2>

        <img src={gateComplete} alt="" className="w3-image" />

        <hr className="ca-hr" />

        <h3>Step 1: Setup</h3>

        <p>In groups, choose one laptop to be used for coding and a second laptop for research. Close all other laptops.</p>

        <p>Download and install <a href="http://code.visualstudio.com/">Visual Studio Code</a> and the LEGO MINDSTORMS EV3 MicroPython extension.
        </p>

        <img src={visualStudioEv3} alt="" className="w3-image" />

        <p>Connect to the local wifi:</p>

        <ul>
            <li>SSID: ROBOTS</li>  
            <li>Password: 99999999</li>
        </ul>

        <hr className="ca-hr" />

        <h3>Step 2: Buld the Sumo Robot</h3> 

        <img src={ev3Sumo} alt="" className="w3-image" />      

        <p>The instructions are available here:</p>

        <p><a href="/instructions/building-instructions-sumo.html">Sumo Robot Instructions</a></p>

        <p>Connect the sensors and motors using the three cables:</p>

        <ul>
          <li>The color sensor is plugged into S1</li>  
          <li>The motors are plugged into MA and MB</li>
        </ul>

        <hr className="ca-hr" />

        <h3>Step 3: Code the Sumo Robot</h3>  

        <p>Start a new project. Open up main.py and use this code as a starting point:</p>

        <pre><code class="hljs python"><span class="hljs-comment">#!/usr/bin/env pybricks-micropython</span>
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks <span class="hljs-keyword">import</span> ev3brick <span class="hljs-keyword">as</span> brick
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.ev3devices <span class="hljs-keyword">import</span> (Motor, TouchSensor, ColorSensor, InfraredSensor, UltrasonicSensor, GyroSensor)
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.parameters <span class="hljs-keyword">import</span> (Port, Stop, Direction, Button, Color, SoundFile, ImageFile, Align)
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.tools <span class="hljs-keyword">import</span> <span class="hljs-keyword">print</span>, wait, StopWatch
        {"\n"}
        <span class="hljs-keyword">from</span> pybricks.robotics <span class="hljs-keyword">import</span> DriveBase
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Write your program here</span>
        {"\n"}
        <span class="hljs-keyword">import</span> time
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Play a sound</span>
        {"\n"}
        brick.sound.beep()
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Initialize a motor at port A and B.</span>
        {"\n"}
        rightMotor = Motor(Port.A)
        {"\n"}
        leftMotor = Motor(Port.B)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Initialize a colour sensor on port 1</span>
        {"\n"}
        color = ColorSensor(Port.S1)
        {"\n"}
        {"\n"}
        <span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:
        {"\n"}
        {"\n"}
        print(<span class="hljs-string">"Color "</span>+str(color.color()))
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># If color is not black</span>
        {"\n"}
        <span class="hljs-keyword">if</span> color.color() != Color.BLACK:
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Move forward</span>
        {"\n"}
        rightMotor.run(<span class="hljs-number">300</span>)
        {"\n"}
        leftMotor.run(<span class="hljs-number">300</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait one twentieth of a second</span>
        {"\n"}
        time.sleep(<span class="hljs-number">0.05</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># If color is black</span>
        {"\n"}
        <span class="hljs-keyword">else</span>:
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Play a sound</span>
        {"\n"}
        brick.sound.beep(<span class="hljs-number">200</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Backup</span>
        {"\n"}
        rightMotor.run(<span class="hljs-number">-300</span>)
        {"\n"}
        leftMotor.run(<span class="hljs-number">-300</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Waie one second</span>
        {"\n"}
        time.sleep(<span class="hljs-number">1</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Spin</span>
        {"\n"}
        rightMotor.run(<span class="hljs-number">-300</span>)
        {"\n"}
        leftMotor.run(<span class="hljs-number">300</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait one second</span>
        {"\n"}
        time.sleep(<span class="hljs-number">1</span>)</code></pre>
        
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

        <p>You may use the provided electrical tape to make a sumo ring on your desk. For the competition we will use the wooden ring in the center of the classrooms:</p>

        <img src={sumoRing} alt="" className="w3-image" />

        <p>Code your LEGO sumo robot to stay within the sumo ring and push the other robot out.</p>

        <hr className="ca-hr" />

        <h3>Step 4: Submitting</h3>

        <p>Submit your <code>main.py</code> files and a list of group members that were present in Blackboard.</p>

        <hr className="ca-hr" />

        <script>hljs.initHighlightingOnLoad();</script>

      </div>
    );
  }
}

export default Sumo;