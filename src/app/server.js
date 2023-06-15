const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();

const client = new Client({
  user: 'techbets',
  host: 'localhost',
  database: 'Student_Registration_Portal',
  password: 'techbets',
  port: 5432, // default port for PostgreSQL
});

// Parse JSON Bodies (to handle form data)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

client.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('Connected to database');
  }
});

client.on('end', () => {
  console.log('Disconnected from database');
});

 

  app.post('/exam', async (req, res) => {
    const data = req.body;
    console.log("Data received is:", data);
  
    try {
      console.log("Inserting data into table:", data);
  
      // Insert the data into the "exam" table
      const insertQuery = 'INSERT INTO "exam" ("startDate", "endDate", "eligibilityCriteriaFile", "otherDetails","examName","registrationFormat","examId") VALUES ($1, $2, $3, $4 , $5, $6 , $7)';
    
      const insertValues = [data.startDate, data.endDate, data.eligibilityCriteriaFile, data.otherDetails,data.examName,data.format,data.examId];
      const result = await client.query(insertQuery, insertValues);
  
      console.log("Data saved to the database:", data);
      console.log("Result =>", result);
  
      // Send back the submitted data as a response
      res.json({ message: 'Data received and saved to the database!', data: data });
    } catch (err) {
      console.log("Cannot send data:", data);
      console.error("Error saving data to the database:", err);
      if (err.code === '23505') {
        // Duplicate key error (unique constraint violation)
        res.status(409).json({ message: 'Data with the same name already exists!', data: data });
      } else {
        res.status(500).json({ message: 'Error saving data to the database', data: data, error: err });
      }
    }
  });
  

app.get('/exam', async (req, res) => {
    try {
      const query = 'SELECT * FROM exam';
      const result = await client.query(query);
      const exams = result.rows;
      res.json({ "Existing Exams": exams });
    } catch (error) {
      console.error('Error retrieving exams:', error);
      res.status(500).json({ message: 'Error retrieving exams', error });
    }
  });
  

  //delete
app.delete('/exam', async (req, res) => {
  try {
    // Delete all items from the "exam" table
    const query = 'DELETE FROM "exam"';
    const result = await client.query(query);

    console.log("All data deleted from the database");
    console.log("Result =>", result);

    res.json({ message: "All data deleted from the database" });
  } catch (err) {
    console.error("Error deleting data from the database:", err);
    res.status(500).json({ message: 'Error deleting data from the database', error: err });
  }
});

  // Route handler for the root URL
app.get('/api', (req, res) => {
  res.send('Welcome to my API server!');
});


app.post('/auth', async (req, res) => {
  const data = req.body;
  console.log("Data received is:", data);

  try {
    console.log("Inserting data into table:", data);

    // Insert the data into the "authDB" table
    let insertQuery;
    let insertValues;
    
    if (data.designation) {
      insertQuery = 'INSERT INTO "authDB" (name, email, password, role, designation) VALUES ($1, $2, $3, $4, $5)';
      insertValues = [data.name, data.email, data.password, data.role, data.designation];
    } else {
      insertQuery = 'INSERT INTO "authDB" (name, email, password, role) VALUES ($1, $2, $3, $4)';
      insertValues = [data.name, data.email, data.password, data.role];
    }
  
    const result = await client.query(insertQuery, insertValues);

    console.log("Data saved to the database:", data);
    console.log("Result =>", result);

    // Send back the submitted data as a response
    res.json({ message: 'Data received and saved to the database!', data: data });
  } catch (err) {
    console.log("Cannot send data:", data);
    console.error("Error saving data to the database:", err);
    if (err.code === '23505') {
      // Duplicate key error (unique constraint violation)
      res.status(409).json({ message: 'Data with the same name already exists!', data: data });
    } else {
      res.status(500).json({ message: 'Error saving data to the database', data: data, error: err });
    }
  }
});




app.get('/auth', async (req, res) => {
  try {
    const { email, password } = req.query;
    const query = 'SELECT * FROM "authDB" WHERE email = $1';
    const result = await client.query(query, [email]);
    const user = result.rows[0];

    if (user) {
      // User found, check password
      if (user.password === password) {
        res.json({ user });
        console.log("user=>", user);
      } else {
        res.status(401).json({ message: 'Incorrect password' });
        console.log('Incorrect password');
      }
    } else {
      res.status(404).json({ message: 'Incorrect email' });
      console.log('Incorrect email');
    }
  } catch (error) {
    console.error('Error retrieving user information:', error);
    res.status(500).json({ message: 'Error retrieving user information', error });
  }
});


app.delete('/auth',async(req,res)=>{
  try{
// Delete all items from the "auth" table
const query = 'DELETE FROM "authDB"';
const result = await client.query(query);

console.log("All data deleted from the database");
console.log("Result =>", result);

res.json({ message: "All data deleted from the database" });
} catch (err) {
console.error("Error deleting data from the database:", err);
res.status(500).json({ message: 'Error deleting data from the database', error: err });
}
})

app.get('/approvers', async (req, res) => {
  try {
    const query = 'SELECT name, email, role, designation FROM "authDB" WHERE role = $1';
    const result = await client.query(query, ['approver']);
    const approvers = result.rows;

    res.json({ approvers });
    console.log("approvers =>", approvers);
  } catch (error) {
    console.error('Error retrieving approvers:', error);
    res.status(500).json({ message: 'Error retrieving approvers', error });
  }
});



//api for sending student registration form !
app.post('/form', async (req, res) => {
  const data = req.body;
  console.log("Data received is:", data);

  try {
    console.log("Inserting data into table:", data);

    // Insert the data into the "exam" table
    const insertQuery = 'INSERT INTO "registeredStudents" (name,email, "fatherName", "motherName", address, "postAppliedFor",gender,dob,attachments,"examName") VALUES ($1, $2, $3, $4 , $5, $6,$7,$8,$9,$10)';

  
    const insertValues = [data.name, data.email, data.fatherName, data.motherName,data.address,data.postAppliedFor,data.gender, data.dob,data.attachments,data.examName];
    const result = await client.query(insertQuery, insertValues);

    console.log("Data saved to the database:", data);
    console.log("Result =>", result);

    // Send back the submitted data as a response
    res.json({ message: 'Data received and saved to the database!', data: data });
  } catch (err) {
    console.log("Cannot send data:", data);
    console.error("Error saving data to the database:", err);
    if (err.code === '23505') {
      // Duplicate key error (unique constraint violation)
      res.status(409).json({ message: 'Data with the same name already exists!', data: data });
    } else {
      res.status(500).json({ message: 'Error saving data to the database', data: data, error: err });
    }
  }
});




app.get('/form', async (req, res) => {
  try {
    const query = 'SELECT * FROM "registeredStudents"';
    const result = await client.query(query);
    const forms = result.rows;
    res.json({ "Existing forms": forms });
  } catch (error) {
    console.error('Error retrieving forms:', error);
    res.status(500).json({ message: 'Error retrieving forms', error });
  }
});


//delete
app.delete('/form', async (req, res) => {
try {
  // Delete all items from the "exam" table
  const query = 'DELETE FROM "registeredStudents"';
  const result = await client.query(query);

  console.log("All data deleted from the database");
  console.log("Result =>", result);

  res.json({ message: "All data deleted from the database" });
} catch (err) {
  console.error("Error deleting data from the database:", err);
  res.status(500).json({ message: 'Error deleting data from the database', error: err });
}
});



//api handling for result generation 
//client querry 
app.post('/api/reportData', async (req, res) => {
  const data = req.body;
  console.log("Data received is:", data);

  try {
    console.log("Inserting data into table:", data);

    // Insert the data into the "reportData" table
    const insertQuery = 'INSERT INTO "reportData" (name, "studentDetails", "studentResponse", "answerKey") VALUES ($1, $2::jsonb, $3::jsonb, $4::jsonb)';
    const insertValues = [data.reportName, JSON.stringify(data.studentDetails), JSON.stringify(data.studentResponses), JSON.stringify(data.answerKey)];
    const result = await client.query(insertQuery, insertValues);

    console.log("Data saved to the database:", data);
    console.log("Result =>", result);

    // Send back the submitted data as a response
    res.json({ message: 'Data received and saved to the database!', data: data });
  } catch (err) {
    console.log("Cannot send data:", data);
    console.error("Error saving data to the database:", err);
    if (err.code === '23505') {
      // Duplicate key error (unique constraint violation)
      res.status(409).json({ message: 'Data with the same name already exists!', data: data });
    } else {
      res.status(500).json({ message: 'Error saving data to the database', data: data, error: err });
    }
  }
});



app.get('/api/reportData', async (req, res) => {
  const name = req.query.name; // Retrieve the 'name' value from the query parameter
  
  try {
    let query = 'SELECT * FROM "reportData"';
    let values = [];

    if (name) {
      query += ' WHERE name = $1';
      values.push(name);
    }

    const result = await client.query(query, values);
    const data = result.rows;
    res.json({ receivedData: data });
  } catch (err) {
    console.error("Error retrieving data from database:", err);
    res.status(500).json({ message: 'Error retrieving data from database', error: err });
  }
});

//delete
app.delete('/api/reportData', async (req, res) => {
  try {
    // Delete all items from the "reportData" table
    const query = 'DELETE FROM "reportData"';
    const result = await client.query(query);

    console.log("All data deleted from the database");
    console.log("Result =>", result);

    res.json({ message: "All data deleted from the database" });
  } catch (err) {
    console.error("Error deleting data from the database:", err);
    res.status(500).json({ message: 'Error deleting data from the database', error: err });
  }
});





const PORT = process.env.PORT || 400;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
