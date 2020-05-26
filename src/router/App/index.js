const routes = [
  {
    path: "/app",
    name: "App",
    redirect: "/app/dashboard",
    component: () => import("@/views/App"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/App/Dashboard")
      },
      {
        path: "storage",
        name: "Storage",
        component: () => import("@/views/App/Storage"),
        children: [
          {
            path: "folder/:id",
            name: "Storage Folder"
          }
        ]
      },
      {
        path: "computing",
        name: "Computing",
        component: () => import("@/views/App/Computing")
      },
      {
        path: "virtual-machine",
        name: "VirtualMachine",
        component: () => import("@/views/App/VirtualMachine")
      }
    ]
  }
];
export default routes;
