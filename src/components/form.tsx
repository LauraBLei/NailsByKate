export const ContactForm = () => {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col gap-4 w-full  flex-1"
    >
      <input
        type="hidden"
        name="access_key"
        value="e55b914d-b754-4098-afc5-5442770c388a"
      />

      <input
        type="text"
        name="name"
        placeholder="Ditt navn"
        required
        className="inputStyle"
      />

      <input
        type="email"
        name="email"
        placeholder="Din e-post"
        required
        className="inputStyle"
      />

      <textarea
        name="message"
        placeholder="Din beskjed..."
        required
        rows={4}
        className="inputStyle min-h-[200px]"
      ></textarea>

      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />
      <input
        type="hidden"
        name="redirect"
        value="https://mywebsite.com/thanks.html"
      />

      <button type="submit" className="button">
        Send
      </button>
    </form>
  );
};
