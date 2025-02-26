const UserProfile = ({ name, age, onAgeChange }) => {
  return (
    <div>
      <h2>UserProfile</h2>
      <p>name:{name}</p>
      <p>Age:{age}</p>
      <button onClick={onAgeChange}>增加年龄</button>
    </div>
  );
};

export default UserProfile;
