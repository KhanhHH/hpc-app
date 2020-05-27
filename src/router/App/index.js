const routes = [
  {
    path: "/app",
    name: "App",
    redirect: "/app/service-dashboard",
    component: () => import("@/views/App"),
    children: [
      {
        path: "service-dashboard",
        name: "Service Dashboard",
        redirect: "/app/service-dashboard/list",
        component: () => import("@/views/App/ServiceDashboard"),
        children: [
          {
            path: "list",
            name: "Service List",
            component: () => import("@/views/App/ServiceDashboard/ServiceList")
          },
          {
            path: "register/:service",
            name: "Service Register",
            component: () =>
              import("@/views/App/ServiceDashboard/ServiceRegister")
            // children: [
            //   {
            //     path: "storage",
            //     component: () =>
            //       import(
            //         "@/views/App/ServiceDashboard/ServiceRegister/RegisterForm/StorageForm"
            //       )
            //   },
            //   {
            //     path: "computing"
            //   },
            //   {
            //     path: "virtual-machine"
            //   }
            // ]
          }
        ]
      },
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
