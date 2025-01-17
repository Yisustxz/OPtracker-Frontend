import { FaUniversity } from "react-icons/fa"; // Icono de universidad

export default function EducationList({ personal }) {
  return (
    <div className="p-4 text-left">
      <h2 className="text-lg font-bold mb-6">Educación</h2>
      <div className="space-y-4 text-left">
        {personal[0]?.educacion?.map((edu, index) => (
          <div key={index} className="flex items-start gap-4">
            <FaUniversity className="text-gray-500 my-4" size={24} />
            <div>
              <div className="font-medium py-4">
                {edu.education.institutionName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
