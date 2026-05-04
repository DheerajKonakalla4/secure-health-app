pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Dependency Scan') {
            steps {
                sh 'npm audit || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t dheerajkonakalla22/secure-health-app .'
            }
        }

        stage('Container Scan') {
            steps {
                sh 'trivy image dheerajkonakalla22/secure-health-app || true'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push dheerajkonakalla22/secure-health-app'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}