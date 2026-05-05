pipeline {
    agent any

    stages {

        stage('Setup Node') {
            steps {
                sh '''
                apt update
                apt install -y curl
                curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                apt install -y nodejs
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t dheerajkonakalla22/health-app .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push dheerajkonakalla22/health-app'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}