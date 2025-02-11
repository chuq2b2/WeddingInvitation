import { useState } from "react";

interface RSVPFormProps {
  location: string;
  eventDate: string;
  rsvpDeadline: string;
  availableDates: {
    date: string;
    times: string[];
  }[];
  onRSVPSubmit: (data: Record<string, any>) => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({
  location,
  eventDate,
  rsvpDeadline,
  availableDates,
  onRSVPSubmit,
}) => {
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const requiredFields = ["name", "email", "weddingAttendance", "plusOne"];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        errors.push(`Please fill out the ${field} field.`);
      }
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    const rsvpData = {
      name: formData.get("name"),
      email: formData.get("email"),
      weddingAttendance: formData.get("weddingAttendance"),
      plusOne: formData.get("plusOne"),
      note: formData.get("note"),
      location
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rsvpData),
      });

      const data = await response.json();
      console.log("RSVP Submission Response:", data);

      onRSVPSubmit(rsvpData);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  return (
    <form
      className="p-4 rounded-md md:w-1/2 w-2/3 avenir pb-24"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center font-fraunces">
        RSVP for {location}
      </h1>
      <p className="text-sm text-gray-500 mb-4 text-center">
        Please confirm your attendance by {rsvpDeadline}.
      </p>

      {formErrors.length > 0 && (
        <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <label className="block font-semibold mb-2">First + Last Name*</label>
        <input
          name="name"
          type="text"
          className="w-full p-2 border rounded-md border-pink-200"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Email*</label>
        <input
          name="email"
          type="email"
          className="w-full p-2 border rounded-md border-pink-200"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Will you attend our Wedding Ceremony in {location} on {eventDate}?*
        </label>
        <select
          name="weddingAttendance"
          className="w-full p-2 border rounded-md border-pink-200"
          required
        >
          <option value="">Select</option>
          <option value="Accept">Happily Accept</option>
          <option value="Decline">Respectfully Decline</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Are you bringing a plus one?
        </label>
        <input
          name="plusOne"
          type="number"
          className="w-1/5 p-2 border rounded-md border-pink-200"
          min="0"
          max="1"
          required
        >
        </input>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Anything else we should know? (e.g. Any food allergy/restriction)
        </label>
        <input
          name="note"
          type="text"
          className="w-full p-2 border rounded-md border-pink-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-200"
      >
        Submit RSVP
      </button>
    </form>
  );
};

export default RSVPForm;
