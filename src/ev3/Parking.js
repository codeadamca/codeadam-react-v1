import React,{Component} from "react";

import visualStudioEv3 from './images/screenshot-visual-studio-ev3.png';
import gateComplete from './images/ev3-gate-complete.png';
import ev3Gate from './images/ev3-gate.jpg';
import ev3GateCar from './images/ev3-gate-car.jpg';
import visualStudioConnect from './images/screenshot-visual-studio-connect.png';

class Parking extends Component {
  render() {
    return (
      <div className="Parking">
              
        <h2 className="w3-text-red w3-center">EV3 Gate Project</h2>

        <img src={gateComplete} alt="" className="w3-image" />

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

        <h3>Step 2: Buld the Parking Gate</h3> 

        <img src={ev3Gate} alt="" className="w3-image" />

        <p>The instructions are available here:</p>

        <p><a href="/instructions/building-instructions-gate.html">Parking Gate Bulding Instructions</a></p>

        <p>Connect the sensors and motors using the two cables:</p>

        <ul>
          <li>The proximity sensor is plugged into S1</li>  
          <li>The motor is plugged into MA</li>
        </ul>

        <hr className="ca-hr" />

        <h3>Step 3: Build the Car</h3>

        <img src={ev3GateCar} alt="" className="w3-image" />

        <p>The instructions are available here:</p>

        <p><a href="/instructions/building-instructions-gate-car.html">Car Bulding Instructions</a></p>

        <p>The remote will not actually be used in this project, you can leave the remote turned off.</p>

        <hr className="ca-hr" />

        <h3>Step 4: Code the Parking Gate</h3>  

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
        motor = Motor(Port.A)
        {"\n"}
        distanceSensor = InfraredSensor(Port.S1)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Reset the position of the motor</span>
        {"\n"}
        motor.reset_angle(<span class="hljs-number">0</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Display the current motor position</span>
        {"\n"}
        print(<span class="hljs-string">"Current Motor Position: "</span>+str(motor.angle()))
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Move the motor one direction</span>
        {"\n"}
        motor.run_target( <span class="hljs-number">100</span>, <span class="hljs-number">-45</span>, Stop.HOLD, <span class="hljs-literal">False</span> )
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Wait three seconds</span>
        {"\n"}
        time.sleep(<span class="hljs-number">3</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Move the motor the other direction</span>
        {"\n"}
        motor.run_target( <span class="hljs-number">100</span>, <span class="hljs-number">0</span>, Stop.HOLD, <span class="hljs-literal">False</span> )
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Create a loop</span>
        {"\n"}
        <span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:
        {"\n"}
        <span class="hljs-comment"># Wait five seconds</span>
        {"\n"}
        time.sleep(<span class="hljs-number">5</span>)
        {"\n"}
        <span class="hljs-comment"># Make a beep</span>
        {"\n"}
        brick.sound.beep(<span class="hljs-number">200</span>)
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Display the current distance</span>
        {"\n"}
        print(<span class="hljs-string">"Current Distance: "</span>+str(distanceSensor.distance())) 
        {"\n"}
        {"\n"}
        <span class="hljs-comment"># Output instructions to stop this code</span>
        {"\n"}
        print(<span class="hljs-string">"Press the stop button to end this script"</span>)</code></pre>

        <p>Read the starting code line by line and all the comments. As a group strive to understand every line of code.</p>

        <p>Your bin will have two names, the LEGO Brick will use the name on the red tape. Use Visual Studio Code to the LEGO Brick:</p>

        <img src={visualStudioConnect} alt="" className="w3-image" />

        <p>Push F5 on a PC or FN+F5 on a Mac to test your code.</p>

        <p>That's it! The rest is up to you. Program the gate to open when the car parks in front of the infared sensor.</p>

        <p>Note: You may want to remove the gate bar when testing, it will keep hitting rest of the structure.</p>

        <hr className="ca-hr" />

        <h3>Step 5: Submitting</h3>

        <p>Submit your <code>main.py</code> file and a list of group members that were present in Blackboard.</p>

        <hr className="ca-hr" />

        <script>hljs.initHighlightingOnLoad();</script>

      </div>
    );
  }
}

export default Parking;