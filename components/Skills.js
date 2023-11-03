const skills = ['React', 'TypeScript', 'AWS'];

export default function Skills() {
  return (
    <>
      <h2>skills</h2>
      <ul className="pl-6 list-circle">
        {skills.map((skill) => (
          <li key={`skill_${skill}`}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
