export const template = (task) => `<li>
                        <button>
                            <img
                                width="20px"
                                height="20px"
                                src="../assets/icons/radio_button_unchecked.svg"
                            />
                        </button>
                        <div>${task}</div>
                        <div>
                            <button class="edit-icon-btn">
                                <img
                                    width="20px"
                                    height="20px"
                                    src="../assets/icons/edit.svg"
                                />
                            </button>
                            <button class="delete-icon-btn">
                                <img
                                    width="20px"
                                    height="20px"
                                    src="../assets/icons/delete.svg"
                                />
                            </button>
                        </div>
                    </li>`;
