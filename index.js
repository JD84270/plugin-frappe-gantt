// Fichier : index.js
import "https://unpkg.com/frappe-gantt/dist/frappe-gantt.css";
import "https://unpkg.com/frappe-gantt/dist/frappe-gantt.min.js";

export default {
  name: "FrappeGantt",
  props: {
    tasks: {
      type: Array,
      default: () => [
        {
          id: 'Task 1',
          name: 'Étude de faisabilité',
          start: '2025-03-30',
          end: '2025-04-04',
          progress: 50
        },
        {
          id: 'Task 2',
          name: 'Conception',
          start: '2025-04-05',
          end: '2025-04-10',
          progress: 10
        },
        {
          id: 'Task 3',
          name: 'Chantier',
          start: '2025-04-11',
          end: '2025-04-20',
          progress: 0
        }
      ]
    }
  },
  setup(props) {
    const containerId = "gantt-container-" + Math.random().toString(36).substring(2);

    onMounted(() => {
      const div = document.createElement("div");
      div.id = containerId;
      div.style.height = "400px";
      div.style.width = "100%";
      document.body.appendChild(div);

      new Gantt("#" + containerId, props.tasks, {
        view_mode: 'Day',
        date_format: 'YYYY-MM-DD',
        on_click: task => console.log("Tâche cliquée:", task.name),
        on_date_change: (task, start, end) => console.log("Dates modifiées:", start, end),
        on_progress_change: (task, progress) => console.log("Progress:", progress + "%")
      });
    });

    return () => null;
  }
};
