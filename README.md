# [Link](https://abhishekhandacse.github.io/ElasticCollision/) 

# Elastic Collision Visualizer


This is a Elastic collision visulizer made using -:

  - HTML Canvas
  - Vanilla Javascript (es6)
  - Bootstrap 4

# Underlying Physics involved

  - Assuming an ideal environment (without friction and without any deformation of bodies) we can calculate the final velocities of two balls with mass m1,m2 (Kg) and initial velocities u1,u2 (m/s) using the equations from-:
    - Conservation of momentum along x axis 
        - m1u1 + m2u2 = m1v1 + m2v2    
    - Energy Conservation of the system.
        - 0.5m1(u1^2) + 0.5m2(u2^2)  =  0.5m1(v1^2) + 0.5m2(v2^2)  
- In this equation, m1,m2,u1,u2 are the known quantities and unknown's are v1,v2 (final velocity of the balls). Two equations Two variables implies we can easily solve this system of equations.
- For better understanding, please watch the video [Link](https://www.khanacademy.org/science/physics/linear-momentum/elastic-and-inelastic-collisions/v/how-to-use-the-shortcut-for-solving-elastic-collisions) 

# Improvements
- Please feel free to send PR if you find anything strange like bug etc.
- You can also suggest enhancements that could also be done ( like taking friction also into account :)  )


