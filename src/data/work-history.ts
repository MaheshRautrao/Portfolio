export const workHistory = [
  {
    company: "PropVivo",
    position: "CRM Module Lead | Full Stack Developer",
    duration: "Jan 2024 - Current",
    experiences: [
      {
        title: "Code Quality & Optimization",
        description:
          "As a lead, ensured high code quality, optimization, and maintainability through rigorous PR reviews, best practices, and refactoring strategies.",
        points: [
          "Conducted thorough pull request (PR) reviews, ensuring adherence to best coding practices, proper architecture, and performance optimizations.",
          "Identified and eliminated redundant or duplicate code by introducing reusable utility functions and modular components.",
          "Enforced proper naming conventions, consistent formatting, and clean code principles to improve code readability and maintainability.",
          "Optimized database queries and API calls to enhance system performance and reduce unnecessary computations.",
          "Ensured proper error handling and logging mechanisms to enhance debugging and maintain stability.",
          "Implemented and enforced design patterns to ensure scalable and maintainable code structures.",
          "Mentored team members by providing constructive feedback and best practice suggestions in PR reviews.",
          "Established coding standards and guidelines to ensure consistency across the codebase.",
          "Integrated automated code analysis tools for detecting potential performance issues and enforcing best practices.",
          "Encouraged test-driven development (TDD) and wrote unit tests to validate core functionalities while maintaining code quality.",
        ],
      },
      {
        title: "Test Cases Project",
        description:
          "Enhanced API test automation by making the process more dynamic and efficient using real data instead of static JSON.",
        points: [
          "Initially, API test cases were written using static JSON data, limiting flexibility and real-world accuracy.",
          "Refactored the approach to dynamically fetch data from the old database, convert it to the new structure, and test APIs with real data.",
          "Optimized API testing by leveraging object-based serialization, automatically converting objects to JSON when making HTTP client requests.",
          "Automated data cleanup by implementing deletion of test data post-execution, preventing junk data accumulation in the database.",
          "Integrated automated login and token handling, ensuring seamless authentication for API testing without manual intervention.",
          "Reduced manual effort and improved testing accuracy by making tests reflect actual data transformations.",
        ],
      },
      {
        title: "Migration Project",
        description:
          "Refactored and optimized the migration process by eliminating redundant code and improving reusability.",
        points: [
          "Previously, migration and migration preview were handled as separate functions, causing code duplication.",
          "Refactored the logic to use a single function with a boolean flag, reducing redundancy and improving maintainability.",
          "Implemented a mechanism to delete previously migrated data before running migrations again, preventing unique constraint errors.",
          "Ensured data integrity by validating and handling edge cases before inserting new records into the database.",
          "Optimized migration execution by reducing unnecessary computations and improving data transformation efficiency.",
        ],
      },
      {
        title: "Form Builder Feature",
        description:
          "Developed a dynamic form builder similar to Google Forms, allowing users to create, edit, and manage custom forms with multiple question types.",
        points: [
          "Designed a flexible schema to support various question types, including multiple-choice, dropdowns, checkboxes, short text, long text, file uploads, and rating scales.",
          "Implemented real-time form saving, allowing users to store drafts and edit responses at any time before submission.",
          "Developed a structured object model for forms, ensuring that forms can be dynamically rendered on the frontend based on stored configurations.",
          "Ensured responses are stored per question, enabling detailed analytics and structured data retrieval.",
          "Implemented validation rules for required fields, character limits, and answer constraints.",
          "Built an autosave feature to prevent data loss while filling out forms.",
          "Optimized data retrieval with indexing for faster query performance on large datasets.",
          "Implemented pagination and filtering for managing responses efficiently.",
          "Integrated role-based access control, allowing only authorized users to edit or view certain forms.",
          "Developed an export feature for downloading form responses in CSV and JSON formats for reporting and analysis.",
          "Added the ability to duplicate forms, enabling users to reuse templates and create new forms quickly.",
        ],
      },
      {
        title: "Document Library Feature",
        description:
          "Developed a robust document management system similar to Google Drive, supporting infinite-level nested folders and file handling.",
        points: [
          "Implemented a recursive approach to efficiently manage and retrieve n-level nested folder structures.",
          "Designed a flat database structure similar to a linked list, using parent-child relationships for efficient storage and retrieval.",
          "Developed core functionalities including file and folder creation, renaming, moving, and deletion while handling complex scenarios.",
          "Implemented a 'Starred' functionality to allow users to mark important files and folders for quick access.",
          "Built a 'Trash' feature with soft deletion, ensuring files in the trash remain in the database but cannot be downloaded.",
          "Developed secure file handling with permissions and validation, preventing unauthorized modifications or access.",
          "Implemented move functionality with constraints to prevent moving a folder into itself or its own subfolders.",
          "Integrated file download and bulk download as a ZIP archive, ensuring optimized file retrieval.",
          "Optimized queries and indexing for efficient retrieval of deeply nested files and folders in large datasets.",
          "Ensured proper validation and error handling for edge cases such as duplicate file names, folder conflicts, and invalid move operations.",
          "Implemented an 'Activity Log' to track all user actions, such as file uploads, deletions, moves, and edits, displayed in an activity tab for transparency and auditing.",
        ],
      },
      {
        title: "Portfolio Access Management Feature",
        description:
          "Implemented a structured Portfolio system where associations are managed, and users are assigned to specific associations with controlled access.",
        points: [
          "Designed a hierarchical database structure where a Portfolio contains multiple Associations, and users are stored within Associations.",
          "Implemented strict validation to prevent duplicate user entries within the same Association.",
          "Developed APIs to manage Portfolios, Associations, and User assignments efficiently.",
          "Utilized Cosmos DB with SQL-like queries to flatten data for optimized retrieval and pagination of users and associations in a NoSQL environment.",
          "Implemented filtering, sorting, and ordering features to enhance data management and user experience.",
          "Ensured proper access control, allowing users to only access Associations that belong to their assigned Portfolio.",
          "Designed efficient indexing strategies to improve query performance for large datasets.",
          "Developed bulk user import functionality, enabling batch addition of users to Associations.",
          "Handled association transfers, ensuring seamless reassignment of users without data conflicts.",
          "Integrated an audit log to track changes in user assignments and association modifications for accountability.",
        ],
      },
    ],
  },

  {
    company: "PropVivo",
    position: "Full Stack Developer",
    duration: "Jun 2024 - Dec 2024",
    experiences: [
      {
        title: "Election Feature",
        description:
          "Developed a digital election system for HOA to streamline board and committee member elections.",
        points: [
          "Implemented a digital voting system for HOA members, allowing nominations, video uploads, and voting.",
          "Designed a robust database schema to accommodate various election scenarios.",
          "Integrated attendance tracking for election participants.",
          "Ensured comprehensive validation, including time constraints, vote limits, and edit permissions.",
          "Developed API responses to deliver user-specific data, such as individual voting records.",
          "Configured election result visibility to show either only elected members or include voter details.",
        ],
      },
      {
        title: "Project Setup & Authentication APIs",
        description:
          "Established a new project from scratch and implemented authentication functionality.",
        points: [
          "Configured a .NET Core project structure following best practices.",
          "Developed secure login and registration APIs with JWT-based authentication.",
        ],
      },
      {
        title: "Master Data APIs",
        description:
          "Designed and implemented APIs for handling dynamic master data selections.",
        points: [
          "Created a scalable database structure for master data.",
          "Developed and validated APIs for managing master data efficiently.",
          "Ensured data integrity by enforcing strict update and deletion policies.",
          "Wrote unit tests for all APIs to ensure reliability.",
          "Migrated legacy data to a new structure while optimizing its consistency and format.",
        ],
      },
      {
        title: "Board & Committee Member Feature",
        description:
          "Developed a feature for managing HOA board and committee members.",
        points: [
          "Designed a database model aligning with the existing user profile system.",
          "Built APIs to manage board and committee member functionalities.",
          "Implemented validation rules to maintain data consistency.",
          "Integrated document and media handling via a common Media API.",
          "Wrote unit tests and performed data migration to align with the new structure.",
        ],
      },
      {
        title: "ARC Request Feature",
        description:
          "Enabled homeowners to submit Architectural Change Requests (ARC) for property modifications.",
        points: [
          "Designed a structured database model for ARC requests.",
          "Developed APIs for submission, review, and approval of ARC requests.",
          "Integrated file handling for architectural plans and documents via the Media API.",
          "Managed communications through a unified messaging system with visibility controls, filtering, and pagination.",
          "Wrote test cases and facilitated seamless data migration.",
        ],
      },
      {
        title: "Service Request Feature",
        description:
          "Implemented a system for homeowners to request maintenance and services.",
        points: [
          "Created a structured database schema for service requests.",
          "Developed APIs for request creation, tracking, and management.",
          "Applied validation rules to ensure compliance with different service scenarios.",
          "Integrated document uploads via a centralized Media API.",
          "Managed service-related communication using a common messaging system with visibility, filtering, and pagination.",
          "Wrote test cases and handled data migration from the legacy system.",
        ],
      },
    ],
  },
];
