# Important CSS Properties used:

1. Removing default styles of the browser
    ```
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

2. Using Flexbox
   ```
   display: flex; or inline-flex; or block; or inline-block;
   justify-content: center; or space-evenly; or space-around; or space-between;
   align-items: center; or start; or end;
   flex-direction: column; or row;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 20px;
   ```

3. Font/Text Related Properties
   ```
   font-size: 4rem;
   font-weight: 800;
   letter-spacing: 3px;
   
   color: black;
   background-color: white;
   border: 2px solid black;
   border-radius: 10px;
   ```

4. Media Queries<br>
   <img width="402" alt="Screenshot 2024-11-30 at 11 22 40 AM" src="https://github.com/user-attachments/assets/f25f4ac4-0ce6-43d7-bc76-1ffe65ce6eac">
   <img width="454" alt="Screenshot 2024-11-30 at 11 26 05 AM" src="https://github.com/user-attachments/assets/9f04e016-2602-41d2-9b61-f140f36e4e71">
    <br>
    **Bootstrap Breakpoints:**<br>
   <img width="637" alt="Screenshot 2024-11-30 at 11 54 32 AM" src="https://github.com/user-attachments/assets/22b13224-66cb-4145-b592-3bd2904b54de"><br>
    **Max-width set styles inside the set boundary:**<br>
   <img width="283" alt="Screenshot 2024-11-30 at 11 55 48 AM" src="https://github.com/user-attachments/assets/fcd20dca-5301-49cf-9c86-c9a819db27c4"><br>
   **Min-width set styles outside the set boundary:**<br>
   <img width="275" alt="Screenshot 2024-11-30 at 11 58 05 AM" src="https://github.com/user-attachments/assets/880bc683-7b95-4b68-9b05-83a2944e4dfb">




5. Using Grid
   ```
   display: grid;
   place-items: center;   // does both: justify-content: center; and align-items: center;

   grid-template-columns: 2fr 4fr;  // 2nd column should take 2x space than first!
   grid-template-rows; 3fr 1fr;
   ```

6. To center an element
   ```
   margin: 0 auto;
   ```

