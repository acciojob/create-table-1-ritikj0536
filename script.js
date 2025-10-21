function insert_Row() {
  // Step 1: Get the table using its ID
  const table = document.getElementById("sampleTable");

  // Step 2: Insert a new row at the top (index 0)
  const newRow = table.insertRow(0);

  // Step 3: Create two new cells inside the row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Step 4: Add text to the cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
