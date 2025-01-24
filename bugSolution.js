The solution is to use a regular expression within the route definition to correctly handle special characters in the dynamic segments.  Instead of `/users/:id`, modify the route definition to use a regular expression to capture the dynamic segment, allowing special characters.

```javascript
// bug.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function User({params}){
    return (
        <div>User: {params.id}</div>
    );
}

// bugSolution.js
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function User(){
    const params = useParams();
    return (
        <div>User: {params.id}</div>
    );
}
```
The bug version uses the plain `/users/:id` which will fail for a url like `/users/+123`. The solution uses a regex to match the path correctly.