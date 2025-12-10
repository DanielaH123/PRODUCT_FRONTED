function HelloWorldTailwind() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-blue-600">
          Hola Mundo
        </h1>

        <p className="text-gray-600 mt-6">
          Este es un componente simple usando Tailwind CSS
        </p>

        <Button
          type="primary"
          text="Primary Button"
          onClick={() => alert("You clicked a primary button!")}
        />

        <Button
          type="secondary"
          text="Secondary Button"
          onClick={() => alert("You clicked a secondary button!")}
        />

        <Button
          type="danger"
          text="Click me!"
          onClick={() => alert("You clicked me!")}
        />

        <Button
          type="success"
          text="Click me!"
          onClick={() => alert("You clicked me!")}
        />

        <Button
          type="warning"
          text="Click me!"
          onClick={() => alert("You clicked me!")}
        />

        <Button
          type="primary"
          text="Another Primary Button"
          onClick={() => alert("You clicked a primary button!")}
        />

        {/* --- BOTONES NUEVOS --- */}

        <Button
          type="secondary"
          text="Extra Secondary"
          onClick={() => alert("Extra secondary button clicked!")}
        />

        <Button
          type="danger"
          text="Extra Danger"
          onClick={() => alert("Extra danger button clicked!")}
        />
      </div>
    </div>
  );
}

export default HelloWorldTailwind;

