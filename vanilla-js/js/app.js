import { template } from "./template.js";

const $ = (selector) => document.querySelector(selector);

class App {
    constructor() {
        this.$taskScene = $(".task");
        this.$addTaskScene = $(".add-task");
        this.$editTaskScene = $(".edit-task");

        this.$taskList = $("#task-list");
        this.$addTaskButton = $("#add-task-btn");
        this.$editButtons = document.querySelectorAll(".edit-icon-btn");
        this.$deleteButtons = document.querySelectorAll(".delete-icon-btn");

        this.$addButton = $("#add-btn");
        this.$backButtons = document.querySelectorAll(".back");
        this.$addInput = $("#add-input");

        this.addInputValue = "";
    }

    init() {
        this.$taskScene.classList.replace("hide", "display");
        this.addEvent();
    }

    updateState() {
        this.$editButtons = document.querySelectorAll(".edit-icon-btn");
        this.$deleteButtons = document.querySelectorAll(".delete-icon-btn");

        this.$editButtons.forEach(($editButton) => {
            $editButton.addEventListener("click", this.showEditScene);
        });

        this.addInputValue = "";
        this.$addInput.value = "";
    }

    onChangeAddInput(e) {
        this.addInputValue = e.target.value;
    }

    addTask() {
        const tasks = this.$taskList.innerHTML + template(this.addInputValue);
        this.$taskList.innerHTML = tasks;
        this.updateState();
    }

    changeScene($nextScene) {
        const $currentScene = $(".display");
        $currentScene.classList.replace("display", "hide");
        $nextScene.classList.replace("hide", "display");
    }

    showAddTaskScene = () => {
        this.changeScene(this.$addTaskScene);
    };

    showTaskScene = () => {
        this.changeScene(this.$taskScene);
    };

    showEditScene = () => {
        this.changeScene(this.$editTaskScene);
    };

    addEvent() {
        this.$addTaskButton.addEventListener("click", this.showAddTaskScene);
        this.$backButtons.forEach(($backButton) => {
            $backButton.addEventListener("click", this.showTaskScene);
        });

        this.$editButtons.forEach(($editButton) => {
            $editButton.addEventListener("click", this.showEditScene);
        });

        this.$addButton.addEventListener("click", () => {
            this.addTask();
            this.changeScene(this.$taskScene);
        });
        this.$addInput.addEventListener("change", (e) =>
            this.onChangeAddInput(e)
        );
    }
}

const app = new App();
app.init();
