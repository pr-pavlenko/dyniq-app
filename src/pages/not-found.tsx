import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import error from "../assets/robo-2.png";

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <Card className="max-w-2xl w-full border-primary/20 shadow-2xl shadow-primary/10">
        <CardContent className="pt-6">
          <motion.div className="max-w-fit mx-auto relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div className="absolute inset-0 blur-3xl bg-destructive/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img src={error} alt="404 Error" width={200} className="relative z-10" />
          </motion.div>

          <motion.div className="text-center mt-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h1 className="text-7xl font-black text-primary"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
            >
              404
            </motion.h1>
            <motion.h2 className="text-3xl font-bold text-primary/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Page Not Found
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-md mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Oops! The page you're looking for has vanished into the void. It might have been moved, deleted, or never existed.
            </motion.p>
            <motion.div className="flex gap-4 justify-center pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button onClick={() => navigate(-1)} variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50">Go Back</Button>
              <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90 text-white">Go Home</Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFound;