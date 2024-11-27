const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "96adfbd6-3c86-4bb9-a09c-15cfcb82c154");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your Information Submitted!!");
    }
  };

  return (
    <div className="p-8 shadow-md rounded-lg mx-auto w-3/4 lg:w-1/2 mt-8">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
        <span className="text-blue-900">Get In Touch</span>
      </h1>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 border-5 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              required
              className="w-full p-3 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="emailSub"
              placeholder="Email Subject"
              required
              className="w-full p-3 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Your Messages"
            required
            className="w-full p-3 border-2 border-blue-500 rounded-md resize-none focus:ring-2 focus:ring-blue-300 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
