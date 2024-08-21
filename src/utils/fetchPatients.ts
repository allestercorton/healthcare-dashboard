export const fetchPatients = async () => {
  const username = 'coalition';
  const password = 'skills-test';
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  const response = await fetch(
    'https://fedskillstest.coalitiontechnologies.workers.dev',
    {
      method: 'GET',
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
