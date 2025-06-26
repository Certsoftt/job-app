// Table configuration for dynamic table rendering by route
export const tableConfigs = {
  "/deliverables": {
    columns: [
      { key: "deliverable", label: "Deliverable", width: "w-[260px]", align: "center" },
      { key: "project", label: "Project", width: "w-[180px]", align: "center" },
      { key: "client", label: "Client", width: "w-[180px]", align: "center" },
      { key: "assignedTo", label: "Assigned To", width: "w-[200px]", align: "center" },
      { key: "status", label: "Status", width: "w-[160px]", align: "center" },
      { key: "dueDate", label: "Due Date", width: "w-[140px]", align: "center" },
      { key: "actions", label: "Actions", width: "w-[120px]", align: "center" },
    ],
    filterOptions: ["client", "project", "status", "date"],
    actions: ["view", "edit", "delete"],
  },
  "/meetings": {
    columns: [
      { key: "dateTime", label: "Date & Time", width: "w-[200px]", align: "center" },
      { key: "client", label: "Client", width: "w-[180px]", align: "center" },
      { key: "project", label: "Project", width: "w-[180px]", align: "center" },
      { key: "purpose", label: "Purpose", width: "w-[220px]", align: "center" },
      { key: "status", label: "Status", width: "w-[140px]", align: "center" },
      { key: "platform", label: "Platform", width: "w-[120px]", align: "center" },
      { key: "actions", label: "Actions", width: "w-[120px]", align: "center" },
    ],
    filterOptions: ["client", "project", "status", "date"],
    actions: ["view", "edit", "cancel"],
  },
};
