import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/HomeStyles";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const STORAGE_KEY = "@todo_tasks";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveTasks();
    }
  }, [tasks, isLoaded]);

  async function loadTasks() {
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log("Erro ao carregar tarefas:", error);
    } finally {
      setIsLoaded(true);
    }
  }

  async function saveTasks() {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.log("Erro ao salvar tarefas:", error);
    }
  }

  function handleAddTask() {
    if (!task.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: task.trim(),
      done: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTask("");
  }

  function toggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  function handleRemoveTask(id: string) {
    setSelectedTaskId(id);
    setDeleteModalVisible(true);
  }

  function confirmDeleteTask() {
    if (!selectedTaskId) return;

    setTasks((currentTasks) =>
      currentTasks.filter((t) => t.id !== selectedTaskId)
    );

    setSelectedTaskId(null);
    setDeleteModalVisible(false);
  }

  function cancelDeleteTask() {
    setSelectedTaskId(null);
    setDeleteModalVisible(false);
  }

  function handleEditTask(id: string) {
    const selectedTask = tasks.find((t) => t.id === id);

    if (!selectedTask) return;

    setEditingTaskId(id);
    setEditingText(selectedTask.title);
    setEditModalVisible(true);
  }

  function confirmEditTask() {
    if (!editingTaskId || !editingText.trim()) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.map((t) =>
        t.id === editingTaskId
          ? { ...t, title: editingText.trim() }
          : t
      )
    );

    setEditingTaskId(null);
    setEditingText("");
    setEditModalVisible(false);
  }

  function cancelEditTask() {
    setEditingTaskId(null);
    setEditingText("");
    setEditModalVisible(false);
  }

  const selectedTask = tasks.find((t) => t.id === selectedTaskId);

  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pending = total - done;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      <View style={styles.header}>
        <Text style={styles.title}>To-do List</Text>
        <Text style={styles.subtitle}>Organizador de tarefas</Text>
      </View>

      <View style={styles.topRow}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma nova tarefa"
            value={task}
            onChangeText={setTask}
          />
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{total}</Text>
          <Text style={styles.summaryLabel}>Total</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{done}</Text>
          <Text style={styles.summaryLabel}>Feitas</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{pending}</Text>
          <Text style={styles.summaryLabel}>Pendentes</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.taskItem, item.done && styles.taskItemDone]}>
            <TouchableOpacity
              style={[
                styles.checkCircle,
                item.done && styles.checkCircleDone,
              ]}
              onPress={() => toggleTask(item.id)}
              activeOpacity={0.7}
            >
              {item.done && <Text style={styles.checkIcon}>✓</Text>}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.taskContent}
              onPress={() => toggleTask(item.id)}
              activeOpacity={0.7}
            >
              <Text style={[styles.taskText, item.done && styles.taskDone]}>
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEditTask(item.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleRemoveTask(item.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Nenhuma tarefa cadastrada</Text>
            <Text style={styles.emptyText}>
              Adicione uma nova tarefa para começar
            </Text>
          </View>
        }
      />

      <Modal visible={deleteModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Excluir tarefa</Text>

            <Text style={styles.modalText}>
              Deseja realmente excluir a tarefa "{selectedTask?.title}"?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={cancelDeleteTask}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={confirmDeleteTask}
                activeOpacity={0.8}
              >
                <Text style={styles.confirmButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={editModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Editar tarefa</Text>

            <TextInput
              style={styles.modalInput}
              value={editingText}
              onChangeText={setEditingText}
              placeholder="Digite o novo texto"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={cancelEditTask}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={confirmEditTask}
                activeOpacity={0.8}
              >
                <Text style={styles.confirmButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}