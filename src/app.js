const { createApp } = Vue;

createApp({
  data() {
    return {
      alunos: [
        {
          nome: 'Adriana Lima',
          cpf: '123.456.789-00',
          ra: '12345',
          email: 'adriana@fatec.com',
          ativo: true,
        },
       
      ],
      form: {
        nome: '',
        cpf: '',
        ra: '',
        email: '',
      },
      showModal: false,
      isEditing: false,
      editIndex: null,
      successMessage: '',
      accessibilityMenuVisible: false,
      isHighContrast: false,
      fontSize: 1,
    };
  },
  methods: {
    showAddModal() {
      this.resetForm();
      this.showModal = true;
      this.isEditing = false;
    },
    editAluno(index) {
      this.editIndex = index;
      const aluno = this.alunos[index];
      this.form = { ...aluno }; 
      this.showModal = true;
      this.isEditing = true;
    },
    addAluno() {
      this.alunos.push({ ...this.form, ativo: true }); 
      this.closeModal();
      this.successMessage = 'Aluno adicionado com sucesso!';
    },
    updateAluno() {
      this.alunos[this.editIndex] = {
        ...this.form,
        ativo: this.alunos[this.editIndex].ativo,
      }; 
      this.closeModal();
      this.successMessage = 'Aluno editado com sucesso!';
    },
    confirmDelete(index) {
      const aluno = this.alunos[index];
      aluno.ativo = !aluno.ativo; 
      this.successMessage = aluno.ativo
        ? 'Conta reativada com sucesso'
        : 'Conta desativada com sucesso';
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    resetForm() {
      this.form = { nome: '', cpf: '', ra: '', email: '' };
    },
    toggleAccessibilityMenu() {
      this.accessibilityMenuVisible = !this.accessibilityMenuVisible;
    },
    toggleContrast() {
      this.isHighContrast = !this.isHighContrast;
      document.body.classList.toggle('high-contrast', this.isHighContrast);
    },
    increaseFontSize() {
      this.fontSize += 0.1;
      document.body.style.fontSize = `${this.fontSize}rem`;
    },
    decreaseFontSize() {
      if (this.fontSize > 0.5) {
        this.fontSize -= 0.1;
        document.body.style.fontSize = `${this.fontSize}rem`;
      }
    },
  },
}).mount('#app');