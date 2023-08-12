let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  function PrintDeveloper() {
    const developers = arr.filter(employee => employee.profession === 'developer');
    console.log(developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
    arr.push(newEmployee);
    console.log('Employee added:', newEmployee);
  }
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log('Admin employee removed.');
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 5, name: 'alice', age: 22, profession: 'developer' },
      { id: 6, name: 'bob', age: 21, profession: 'designer' },
    ];
    
    arr = arr.concat(newArray);
    console.log('Arrays concatenated:', arr);
  }
  