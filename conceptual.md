### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity-protected with a Message Authentication Code (MAC) and/or encrypted.



- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT is the third part of the token. It is created by taking the encoded header, the encoded payload, a secret, the algorithm specified in the header, and signing them. The purpose of the signature is to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.


- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, if a JWT is intercepted, the attacker can see what's inside the payload. The payload is base64 encoded but not encrypted, so it is easily readable if decoded. However, without the secret key, the attacker cannot modify the payload without invalidating the signature.



- How can you implement authentication with a JWT?  Describe how it works at a high level.

User Login: The user logs in using their credentials.
Token Issuance: The server verifies the credentials and issues a JWT, which contains the user's information and possibly other metadata, and signs it with a secret key.
Client Storage: The client receives the JWT and stores it (usually in local storage or a cookie).
Token Usage: The client sends the JWT in the Authorization header of subsequent requests to access protected resources.
Token Verification: The server verifies the JWT by checking its signature using the secret key. If valid, the server processes the request; otherwise, it rejects it.

- Compare and contrast unit, integration and end-to-end tests.
Unit Tests: Test individual components or functions in isolation to ensure they work correctly. They are fast, reliable, and easy to write but do not catch issues arising from interactions between components.
Integration Tests: Test the interactions between different components or systems to ensure they work together as expected. They are more comprehensive than unit tests but can be slower and more complex to set up.
End-to-End (E2E) Tests: Test the entire application workflow from start to finish, simulating real user scenarios. They provide high confidence in the system's correctness but are the slowest and most brittle tests due to their complexity and dependency on external systems.


- What is a mock? What are some things you would mock?
A mock is a simulated object that mimics the behavior of real objects in controlled ways. It is used in unit testing to isolate the component under test by replacing dependencies with mock objects that simulate their behavior.

Some things you would mock include:

External APIs
Databases
File systems
Network calls
Services and components that are difficult to set up or have side effects


- What is continuous integration?
Continuous Integration (CI) is a development practice where developers frequently integrate code into a shared repository, ideally several times a day. Each integration is automatically verified by building the application and running automated tests, allowing teams to detect and address issues early in the development process.


- What is an environment variable and what are they used for?
An environment variable is a dynamic variable in an operating system that can affect the behavior of running processes. They are used to configure applications, manage system settings, and store sensitive information such as API keys, database credentials, and configuration options that should not be hardcoded in the source code.

- What is TDD? What are some benefits and drawbacks?
Test-Driven Development (TDD) is a software development process where developers write tests before writing the code that needs to be tested. The cycle involves writing a test, making it pass by implementing the necessary code, and then refactoring the code while keeping the test passing.

Benefits:

Improved code quality and design
Early bug detection
Better test coverage
Documentation of the code's expected behavior
Drawbacks:

Initial slow down in development speed
Requires discipline and experience
Can be difficult to write good tests for complex scenarios


- What is the value of using JSONSchema for validation?
JSON Schema provides a standardized way to validate the structure and content of JSON data. It ensures that JSON data adheres to a defined format, which helps in:

Reducing errors by catching invalid data early
Enforcing consistency in data structures across systems
Providing clear documentation of expected data formats
Facilitating data interchange between different systems and services


- What are some ways to decide which code to test?
Critical Path: Focus on testing code that is critical to the application's functionality.
Complex Code: Prioritize testing complex or error-prone code.
High Usage: Test code that is frequently used or has significant impact.
External Interactions: Test code that interacts with external systems or APIs.
Previous Bugs: Test areas of code that have had bugs in the past.
Boundary Conditions: Test edge cases and boundary conditions to ensure robustness


- What does `RETURNING` do in SQL? When would you use it?
RETURNING in SQL is used in conjunction with INSERT, UPDATE, and DELETE statements to return values from the affected rows. It can return the values of specified columns or entire rows. You would use RETURNING when you need to obtain the values of the rows that were modified by the query, such as obtaining the generated primary key of a newly inserted row or the previous values of an updated row.




- What are some differences between Web Sockets and HTTP?
Connection: WebSockets provide a persistent, full-duplex connection between the client and server, while HTTP is a stateless, request-response protocol.
Communication: WebSockets enable real-time, bidirectional communication, whereas HTTP requires new requests for each communication.
Efficiency: WebSockets are more efficient for real-time applications as they reduce the overhead of establishing new connections for each message, while HTTP is more suitable for typical web page requests and responses.
Use Cases: WebSockets are ideal for applications that require real-time updates, such as chat applications, live notifications, and online gaming. HTTP is used for standard web browsing and RESTful API interactions.


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
Language: Flask is a Python framework, while Express is a Node.js framework. Preference might depend on familiarity with the language.
Simplicity: Flask is often praised for its simplicity and minimalism, making it easy to get started and ideal for small to medium-sized applications.
Performance: Express, built on Node.js, can be more performant for I/O-bound applications due to Node's non-blocking nature.
Ecosystem: Flask has a strong ecosystem in the Python community, with many extensions available. Express benefits from the vast NPM ecosystem and the support of the JavaScript community.
Scalability: Both frameworks are scalable, but the choice might depend on the specific needs of the project and the developer's experience with scaling Python versus JavaScript applications.
Overall I prefered Flask.