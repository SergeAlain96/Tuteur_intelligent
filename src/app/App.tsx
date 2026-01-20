import { useState } from 'react';
import { Home, BookOpen, Clipboard, Award, Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HomePage } from '@/app/components/HomePage';
import { SubjectsBoard } from '@/app/components/SubjectsBoard';
import { CoursePage } from '@/app/components/CoursePage';
import { ExercisesPage } from '@/app/components/ExercisesPage';
import { ProgressPage } from '@/app/components/ProgressPage';
import { LoginPage, UserData } from '@/app/components/LoginPage';

type PageType = 'home' | 'subjects' | 'course' | 'exercises' | 'progress';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleLogin = (data: UserData) => {
    setUserData(data);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentPage('home');
  };

  const navItems = [
    { id: 'home' as PageType, label: 'Accueil', icon: Home },
    { id: 'subjects' as PageType, label: 'Mes matières', icon: BookOpen },
    { id: 'course' as PageType, label: 'Cours', icon: Clipboard },
    { id: 'exercises' as PageType, label: 'Exercices', icon: Clipboard },
    { id: 'progress' as PageType, label: 'Progression', icon: Award }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage userName={userData?.firstName} />;
      case 'subjects':
        return <SubjectsBoard />;
      case 'course':
        return <CoursePage />;
      case 'exercises':
        return <ExercisesPage />;
      case 'progress':
        return <ProgressPage />;
      default:
        return <HomePage />;
    }
  };

  // Afficher la page de login si non connecté
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Récupérer l'initiale du prénom pour l'avatar
  const userInitial = userData?.firstName?.charAt(0).toUpperCase() || 'U';
  const userFullName = userData ? `${userData.firstName} ${userData.lastName}` : 'Utilisateur';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduPlateforme
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Apprendre en s'amusant</p>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Profil utilisateur */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">{userFullName}</p>
                <p className="text-xs text-gray-500">{userData?.grade || 'Niveau 6'}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                {userInitial}
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Se déconnecter"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
              <div className="px-4 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-lg">
                      {userInitial}
                    </div>
                    <div>
                      <p className="font-medium">{userFullName}</p>
                      <p className="text-sm text-gray-500">{userData?.grade || 'Niveau 6'} • 1245 points</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              © 2026 EduPlateforme - Apprendre en s'amusant
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Plateforme éducative pour les élèves du primaire au secondaire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;