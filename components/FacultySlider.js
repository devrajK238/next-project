import FacultySliderClient from "./FacultySliderClient";

export default async function FacultySlider() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store", // always fetch fresh data
    });

    if (!res.ok) {
      console.error("❌ API response error:", res.status);
      return <FacultySliderClient faculty={[]} />;
    }

    const data = await res.json();
    console.log("📌 RAW API DATA (server):", data); // should log full JSON

    const faculty = Array.isArray(data)
      ? data.slice(0, 8).map((member, index) => ({
          id: member.id,
          name: member.name,
          email: member.email,
          image: `https://i.pravatar.cc/300?img=${index + 5}`,
          position: index % 2 === 0 ? "Professor" : "Lecturer",
        }))
      : [];

    console.log("✅ FACULTY PREPARED (server):", faculty);

    return <FacultySliderClient faculty={faculty} />;
  } catch (err) {
    console.error("❌ Fetch failed:", err);
    return <FacultySliderClient faculty={[]} />;
  }
}
