function generateMealPlan() {
    const email = document.getElementById('email').value;
  
    if (!email.includes("@")) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const name = document.getElementById('name').value;
    const goal = document.getElementById('goal').value;
    const formData = new FormData(document.getElementById('mealPlanForm'));
  
    let mealPlanHTML = `
      <html>
      <head>
        <title>${name}'s Meal Plan</title>
        <style>
          body { font-family: monospace; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
        </style>
      </head>
      <body>
        <h1>${name}'s Weekly Meal Plan</h1>
        <p>Email: ${email}</p>
        <p>Goal: ${goal}</p>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Snack</th>
              <th>Lunch</th>
              <th>Snack</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
    `;
  
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach((day) => {
      mealPlanHTML += `
        <tr>
          <td>${day}</td>
          <td>${formData.get(`${day.toLowerCase()}Breakfast`) || ""}</td>
          <td>${formData.get(`${day.toLowerCase()}Snack`) || ""}</td>
          <td>${formData.get(`${day.toLowerCase()}Lunch`) || ""}</td>
          <td>${formData.get(`${day.toLowerCase()}Snack2`) || ""}</td>
          <td>${formData.get(`${day.toLowerCase()}Dinner`) || ""}</td>
        </tr>
      `;
    });
  
    const newWindow = window.open();
    newWindow.document.write(mealPlanHTML);
    newWindow.document.close();
  }
  
  function printPlanner() {
    window.print();
  }
  
  function downloadPlanner() {
    const content = document.body.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'meal-plan.html';
    link.click();
  }
