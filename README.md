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

