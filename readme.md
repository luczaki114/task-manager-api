# **Task Manager API**  
A simple CRUD API built with **Node.js & Express** for managing tasks.

---

## **🚀 Getting Started**

### **1️⃣ Install Dependencies**  
```sh
npm install
```

### **2️⃣ Run the Server**  
```sh
npm run dev
```
The server will start at:  
📍 `http://localhost:3000/`

---

## **🛠 API Endpoints**

### **Create a Task**  
**POST** `/tasks`  
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Next.js"}'
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

### **Get All Tasks**  
**GET** `/tasks`  
```bash
curl http://localhost:3000/tasks
```
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

### **Get a Single Task**  
**GET** `/tasks/:id`  
```bash
curl http://localhost:3000/tasks/1
```
✅ **Response:**  
```json
{
  "id": 1,
  "title": "Learn Express",
  "completed": false
}
```

### **Update a Task**  
**PUT** `/tasks/:id`  
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```
✅ **Response:**  
```json
{
  "id": 1,
  "title": "Learn Express",
  "completed": true
}
```

### **Delete a Task**  
**DELETE** `/tasks/:id`  
```bash
curl -X DELETE http://localhost:3000/tasks/1
```
✅ **Response:** `204 No Content` (Task deleted successfully)

## **📌 Next Steps**
✅ Add a database (**MongoDB or PostgreSQL**)  
✅ Add request validation (**express-validator**)  
✅ Deploy to **Vercel, Railway, or Render**  