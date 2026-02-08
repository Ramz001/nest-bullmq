ramz001/nestjs-bullmq-test
kubectl create deployment nestjs-bullmq --image=ramz001/nestjs-bullmq-test:latest --port 3000 --dry-run=client -o yaml > deployment.yaml