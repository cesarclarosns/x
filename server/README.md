## Prerequisites

- Node 20.7.0

## Getting Started

First install the dependencies:

```
npm i
```

Then, run the development server:

```bash
npm run dev
```

![Running dev server](/media/images/server/server_running_dev_server.png)

The development server will connect to the mongodb instance created with Docker.

Open [http://127.0.0.1:5000/api/health](http://127.0.0.1:5000/api/health) with your browser to see the result.

Other commands:

Run the tests

```
npm run test
```

![Running the tests](/media/images/server/server_running_tests.png)
