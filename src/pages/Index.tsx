
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Sparkles, Rocket, Calendar, CreditCard, Users, ChevronRight } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen w-full bg-space-bg text-white overflow-x-hidden">
      {/* Звёзды */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Заголовок */}
      <header className="pt-20 pb-10 text-center relative z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in">
            ЛУННЫЙ ТУРИЗМ
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in">
            Осуществите свою мечту и станьте одним из первых туристов на Луне!
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
            <span className="text-yellow-300 text-xl">Осталось всего 4 билета!</span>
            <Sparkles className="w-6 h-6 ml-2 text-yellow-400" />
          </div>
        </div>
      </header>

      {/* Основная информация */}
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-space-card border-purple-500 border-2">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-bold text-purple-300">Дата вылета</h2>
                </div>
                <p className="text-3xl font-bold text-center text-white">26 июня 2026 г.</p>
              </Card>

              <Card className="p-6 bg-space-card border-blue-500 border-2">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-8 h-8 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-300">Стоимость билета</h2>
                </div>
                <p className="text-3xl font-bold text-center text-white">1 300 000 ₽</p>
                <p className="mt-3 text-gray-300">
                  В стоимость входит всё необходимое оборудование, питание, страховка и тренировки.
                </p>
              </Card>

              <Card className="p-6 bg-space-card border-pink-500 border-2">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-pink-400 mr-3" />
                  <h2 className="text-2xl font-bold text-pink-300">Доступность</h2>
                </div>
                <p className="text-xl text-center text-white">
                  <span className="text-3xl font-bold text-yellow-400">4</span> билета в наличии
                </p>
              </Card>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                Забронируйте свой билет сейчас
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 bg-space-card p-6 rounded-lg border-2 border-blue-500">
                <div>
                  <Label htmlFor="name" className="text-white">Ваше имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                    className="bg-space-input text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Электронная почта</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                    required
                    className="bg-space-input text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Номер телефона</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="bg-space-input text-white"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Забронировать билет
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Требования к ракете */}
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg py-6 px-8">
                <Rocket className="mr-2" /> Технические характеристики ракеты <ChevronRight className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-space-card border-2 border-purple-500 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Технические характеристики космического корабля
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-purple-400">🚀</div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-300">Грузоподъемность:</h3>
                    <p className="text-gray-300">Способна перевозить экипаж из 4-6 туристов, а также груз, включая скафандры, оборудование и припасы.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">🌠</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">Дальность полета:</h3>
                    <p className="text-gray-300">Путешествие на Луну и обратно, что составляет около 400 000 км.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-pink-400">🛡️</div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-300">Безопасность:</h3>
                    <p className="text-gray-300">Оснащена надежными системами безопасности, включая системы аварийного спасения и жизнеобеспечения.</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 mt-10 border-t border-blue-900 relative z-10 bg-space-card/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-300">Создатель: Антонова Ксения</p>
          <p className="text-gray-400 mt-2">© 2024 Лунный Туризм. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
