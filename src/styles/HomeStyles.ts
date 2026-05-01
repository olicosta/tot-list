import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 40,
  },

  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
  },

  subtitle: {
    fontSize: 16,
    color: "#4b5563",
    marginTop: 6,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  inputWrapper: {
    flex: 1,
  },

  input: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d5db",
    fontSize: 16,
    color: "#111827",
  },

  addButton: {
    backgroundColor: "#22c55e",
    marginLeft: 12,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  summaryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    flex: 1,
    marginHorizontal: 4,
  },

  summaryNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#22c55e",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },

  taskItem: {
    backgroundColor: "#ffffff",
    padding: 14,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  taskItemDone: {
    backgroundColor: "#f0fdf4",
    borderColor: "#bbf7d0",
  },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#9ca3af",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#ffffff",
  },

  checkCircleDone: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },

  checkIcon: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
  },

  taskContent: {
    flex: 1,
  },

  taskText: {
    fontSize: 16,
    color: "#111827",
  },

  taskDone: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
    opacity: 0.6,
  },

  deleteButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },

  deleteButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },

  emptyState: {
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#374151",
  },

  emptyText: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
    textAlign: "center",
  },

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 24,
},

modalCard: {
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: 18,
  padding: 24,
  borderWidth: 1,
  borderColor: "#e5e7eb",
  elevation: 6,
},

modalTitle: {
  fontSize: 20,
  fontWeight: "700",
  color: "#111827",
  marginBottom: 8,
},

modalText: {
  fontSize: 15,
  color: "#4b5563",
  marginBottom: 22,
},

modalButtons: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 10,
},

cancelButton: {
  paddingVertical: 12,
  paddingHorizontal: 18,
  borderRadius: 10,
  backgroundColor: "#e5e7eb",
},

cancelButtonText: {
  color: "#374151",
  fontSize: 15,
  fontWeight: "700",
},

confirmButton: {
  paddingVertical: 12,
  paddingHorizontal: 18,
  borderRadius: 10,
  backgroundColor: "#ef4444",
},

confirmButtonText: {
  color: "#ffffff",
  fontSize: 15,
  fontWeight: "700",
},

editButton: {
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 8,
  backgroundColor: "#3b82f6",
  marginRight: 8,
},

editButtonText: {
  color: "#fff",
  fontWeight: "700",
},

modalInput: {
  borderWidth: 1,
  borderColor: "#e5e7eb",
  borderRadius: 10,
  padding: 12,
  marginBottom: 16,
  fontSize: 16,
  color: "#111827",
},



});

export default styles;
