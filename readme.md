### **Task Manager API**  
A simple CRUD API built with **Node.js & Express** for managing tasks.

---

## **🚀 Getting Started**

### **1️⃣ Install Dependencies**  
```sh
npm install
```

### **2️⃣ Run the Server**  
```sh
node run dev
```
The server will start at:  
📍 `http://localhost:3000/`

---

## **🛠 API Endpoints**

### **📌 Create a Task**  
**POST** `/tasks`  
```json
{
  "title": "Learn Express"
}
```
✅ **Response:**  
```json
{
  "id": 1,
  "title": "Learn Express",
  "completed": false
}
```

---

### **📌 Get All Tasks**  
**GET** `/tasks`  
✅ **Response:**  
```json
[
  {
    "id": 1,
    "title": "Learn Express",
    "completed": false
  }
]
```

---

### **📌 Get a Single Task**  
**GET** `/tasks/:id`  
✅ **Response:**  
```json
{
  "id": 1,
  "title": "Learn Express",
  "completed": false
}
```

---

### **📌 Update a Task**  
**PUT** `/tasks/:id`  
```json
{
  "completed": true
}
```
✅ **Response:**  
```json
{
  "id": 1,
  "title": "Learn Express",
  "completed": true
}
```

---

### **📌 Delete a Task**  
**DELETE** `/tasks/:id`  
✅ **Response:** `204 No Content` (Task deleted successfully)

---

## **🧪 Testing with PowerShell**
Run these commands in **PowerShell** to test the API:

🔹 **Create a Task**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/tasks" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"title": "Learn Express"}'
```

🔹 **Get All Tasks**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/tasks" -Method GET
```

🔹 **Update a Task**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/tasks/1" -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"completed": true}'
```

🔹 **Delete a Task**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/tasks/1" -Method DELETE
```

---

## **📌 Next Steps**
✅ Add a database (**MongoDB or PostgreSQL**)  
✅ Add request validation (**express-validator**)  
✅ Deploy to **Vercel, Railway, or Render**  